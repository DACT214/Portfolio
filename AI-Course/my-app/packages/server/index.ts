import express, { response } from 'express';
import OpenAI from 'openai';

// NOT USING DOTENV
const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(express.json());
const port = Bun.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send('Hola Mundo');
});
app.get('/api/hello', (req, res) => {
   res.json({ message: 'hello world' });
});

app.post('/api/chat', async (req, res) => {
   const { prompt } = req.body;

   const response = await client.responses.create({
      model: 'gpt-4o-mini',
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 100,
   });

   res.json({ message: response.output_text });
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
