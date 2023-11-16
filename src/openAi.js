// import * as dotenv from 'dotenv';
import OpenAI from 'openai';

// dotenv.config();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log(process.env.OPENAI_API_KEY);
export async function sendMessageToOpenAI(message) {
  const res = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return res.choices[0].text;
}
