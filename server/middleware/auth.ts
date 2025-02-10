
import { Request, Response, NextFunction } from 'express';
import { verifyIdToken } from '@google/auth-library-nodej8';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('X-Goog-Signature');
    if (!authHeader) {
      throw new Error('Missing authentication header');
    }

    const audience = process.env.AUDIENCE;
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

    const ticket = await verifyIdToken({
      idToken: authHeader,
      audience: audience,
      issuer: 'https://accounts.google.com',
    });

    if (ticket?.getPayload().email !== serviceAccountEmail) {
      throw new Error('Invalid service account email');
    }

    next();
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default authMiddleware;
      