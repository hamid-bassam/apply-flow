/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/mistral/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      })

      if (!res.body) {
        throw new Error('Response body is null')
      }
      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = decoder.decode(value)
        setResponse(prev => prev + text)
      }
    } catch (err) {
      console.error(err)
      setResponse('Error: Failed to get response')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mistral AI Chat</h1>

      <div className="border p-4 mb-4 h-64 overflow-auto bg-gray-50">
        {response || "AI response will appear here..."}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 p-2 border rounded"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  )
}