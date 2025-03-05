import { Mistral } from '@mistralai/mistralai';
const apiKey = process.env.MISTRAL_API_KEY;

export const MODEL_NAME = "mistral-small-latest";


if (!apiKey) {
  throw new Error("API key is missing");
}
export const mistral = new Mistral({ apiKey: apiKey });
// export const mistralClient = new MistralClient({ apiKey: apiKey });

