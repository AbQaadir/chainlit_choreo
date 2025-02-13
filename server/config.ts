
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

export const Config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  webhookSecret: process.env.WEBHOOK_SECRET,
  jwtKey: process.env.JWT_KEY,
  environment: process.env.NODE_ENV || 'development',
};

export const isProduction = Config.environment === 'production';

if (!fs.existsSync('.env')) {
  fs.copyFileSync('.env.example', '.env');
}
      