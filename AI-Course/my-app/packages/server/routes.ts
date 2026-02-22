import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Hola Mundo');
});
router.get('/api/hello', (req, res) => {
   res.json({ message: 'hello world' });
});

router.post('/api/chat', chatController.sendMessage);

export default router;
