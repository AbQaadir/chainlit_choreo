
import { Router } from 'express';
import { GmailEventPayload, GmailPayload } from '../types';
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

const webhookRouter = Router();

webhookRouter.post('/', async (req: Request, res: Response) => {
  try {
    const payload: GmailEventPayload = req.body;
    
    switch (payload.type) {
      case 'MESSAGE':
        handleMessage(payload);
        break;
      case 'LABEL':
        handleLabel(payload);
        break;
      case 'LABEL_IDS':
        handleLabelIds(payload);
        break;
      default:
        logger.warn('Unknown payload type received');
        res.status(400).json({ error: 'Unknown payload type' });
        return;
    }

    res.status(200).json({ status: 'ok' });
  } catch (error) {
    logger.error('Webhook processing failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const handleMessage = (payload: GmailPayload) => {
  logger.info('New message event:', payload);
  // Implement your message handling logic here
};

const handleLabel = (payload: GmailPayload) => {
  logger.info('Label event:', payload);
  // Implement your label handling logic here
};

const handleLabelIds = (payload: GmailPayload) => {
  logger.info('Label IDs event:', payload);
  // Implement your label IDs handling logic here
};

export default webhookRouter;
      