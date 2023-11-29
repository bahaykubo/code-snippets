import express from 'express';
import { messagesRouter } from './routes/messages';

const app = express();
app.use(express.json());

app.use('/messages', messagesRouter);

app.listen(5250, () => {
  console.log('server running in http://localhost:5250');
});
