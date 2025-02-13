
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { Config } from './config';
import { webhookRouter } from './routes/webhook';
import { authenticateRequest } from './middleware/auth';

const app = express();

// Middleware setup
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json({ limit: '50mb' }));
app.use('/api', webhookRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = Config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${Config.environment} mode`);
});
      