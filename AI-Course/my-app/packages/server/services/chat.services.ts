import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import { conversationRepository } from '../repositories/coversation.repository';
import template from '../prompts/chatbot.txt';

// Impolementation detail
const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

const DCInfo = fs.readFileSync(
   path.join(__dirname, '..', 'prompts', 'DavidCarrillo.md'),
   'utf-8'
);
const instructions = template.replace('{{DCInfo}}', DCInfo);

type ChatResonse = {
   id: string;
   message: string;
};

//Public Interface
export const chatService = {
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResonse> {
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         instructions,
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 200,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationId),
      });

      conversationRepository.setLastResponseId(conversationId, response.id);

      return {
         id: response.id,
         message: response.output_text,
      };
   },
};
