import dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "openai";

// your AI api key goes here
const OPENAI_API_KEY = process.env.API_KEY;

// configure your ai client here
const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// configure you model here
const stream = await client.responses.create({
  model: "gpt-4.1",
  input: "Write a story about a dragon",
  temperature: 0.7,
  max_output_tokens: 250,
  stream: true,
});

// Async iterable
for await (const event of stream) {
  if (event.delta) process.stdout.write(event.delta);
}
