
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
const envPath = path.join(__dirname, '.env');
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  googleServiceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  audience: process.env.AUDIENCE || 'your_audience_string',
  webhookSecret: process.env.WEBHOOK_SECRET || 'your_webhook_secret',
};
      