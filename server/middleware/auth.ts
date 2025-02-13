
import * as express from 'express';
import * as jwt from 'express-jwt';
import { Config } from './config';

export const authenticateWebhook = jwt({
  secret: Config.jwtKey,
  algorithms: ['HS256'],
  requestProperty: 'auth',
  getToken: (req) => req.headers['x-goog-signature'] as string,
});

export const authenticateRequest = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    authenticateWebhook(req, res, next);
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
      