
import * as express from 'express';
import { GmailWebhookPayload, WebhookResponse } from './types';
import { authenticateRequest } from './middleware/auth';
import * as logger from './utils/logger';

export const webhookRouter = express.Router();

webhookRouter.post(
  '/webhook',
  authenticateRequest,
  async (req: express.Request, res: express.Response) => {
    try {
      const payload: GmailWebhookPayload = req.body;
      logger.info('Received webhook notification:', payload);

      // Process the payload here
      res.status(200).json({ status: 'success', message: 'Webhook received successfully' });
    } catch (error) {
      logger.error('Webhook processing failed:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  }
);
      