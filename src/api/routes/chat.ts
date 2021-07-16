import {
  Router, Request, Response, NextFunction,
} from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';

const route = Router();

export default (app: Router) => {
  app.use('/messages', route);

  route.get('/test', (req: Request, res: Response) => {
    return res.status(200);
  });

  route.post('/new', (req: Request, res: Response, next: NextFunction) => {
    const logger:Logger = Container.get('logger');
    logger.debug('Calling New Chat Message endpoint with body: %o', req.body);
    try {
      return res.status(200).end();
    } catch (e) {
      logger.error('error %o', e);
      return next(e);
    }
  });
};
