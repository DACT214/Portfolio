import express, { response } from 'express';
import z from 'zod';
import { chatService } from './services/chat.services';

const app = express();
app.use(express.json());
const port = Bun.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send('Hola Mundo');
});
app.get('/api/hello', (req, res) => {
   res.json({ message: 'hello world' });
});

const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Request is blank, please write something.')
      .max(1000, 'Prompt is too long for our Model'),
   conversationId: z.uuid(),
});

app.post('/api/chat', async (req, res) => {
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
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
