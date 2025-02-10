
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import winston from 'winston';
import authMiddleware from './middleware/auth';
import webhookRouter from './routes/webhook';
import config from './config';

const app = express();

// Setup logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

// Middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/webhook', authMiddleware, webhookRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const port = config.port;
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
      