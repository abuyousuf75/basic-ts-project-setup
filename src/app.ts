import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;
