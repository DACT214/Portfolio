import type { Request, Response } from 'express';
import { chatService } from '../services/chat.services';
import z from 'zod';

// Implementation Detail
const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Request is blank, please write something.')
      .max(1000, 'Prompt is too long for our Model'),
   conversationId: z.uuid(),
});

// Public Interface
export const chatController = {
   async sendMessage(req: Request, res: Response) {
      const parseResult = chatSchema.safeParse(req.body);
      if (!parseResult.success) {
         res.status(400).json(parseResult.error!.issues); // Can use z.treeifyError(parseResult.error) for simpler object of errors
         return;
      }

      try {
         const { prompt, conversationId } = req.body;

         const response = await chatService.sendMessage(prompt, conversationId);

         res.json({ message: response.message });
      } catch (error) {
         res.status(500).json({ error: 'Server Side Error' });
      }
   },
};
