// app/api/mistral/route.ts
import { NextRequest } from 'next/server';
import { mistral } from '../../../../lib/AI-clients/mistral';

const systemPrompt = `
just say "NO" 
`
export async function POST(req: NextRequest) {
  try {
    // Get prompt from request body
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt requis." }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        try {
          // Get response stream from Mistral
          const chatStreamResponse = await mistral.chat.stream({
            model: 'mistral-tiny',
            messages: [{
              role: "system",
              content: systemPrompt,
            }, { role: 'user', content: prompt }]
          });

          // Process and send each chunk
          for await (const chunk of chatStreamResponse) {
            if (chunk.data.choices[0].delta.content !== undefined) {
              const streamText = chunk.data.choices[0].delta.content;
              if (streamText !== null) {
                if (typeof streamText === 'string') {
                  controller.enqueue(encoder.encode(streamText));
                }
              }
            }
          }
        } catch (error) {
          console.error('Error during streaming:', error);
          controller.enqueue(encoder.encode('\nError occurred during streaming.'));
        } finally {
          controller.close();
        }
      }
    });

    // Return the stream
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache'
      }
    });

  } catch (error) {
    console.error('Error handling request:', error);
    return new Response(JSON.stringify({ error: 'Error processing request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}