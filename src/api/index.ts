import { Router } from 'express';
import chat from './routes/chat';

export default () => {
  const app = Router();
  chat(app);

  return app;
};
