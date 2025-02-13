
# Gmail Webhook Server

A production-ready Express server for handling Gmail API push notifications.

## Table of Contents
- [Setup](#setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [Security](#security)
- [Development](#development)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
4. Update the environment variables as needed

## Configuration

The server uses the following environment variables:

- `PORT`: The port to listen on (default: 3000)
- `WEBHOOK_SECRET`: Secret key for webhook verification
- `JWT_KEY`: Private key for JWT verification
- `NODE_ENV`: Environment mode (default: development)

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Configure your Gmail API to send push notifications to your server's endpoint:
   ```
   https://your-domain.com/api/webhook
   ```

## Security

- The server uses helmet for security headers
- Webhooks are verified using JWT authentication
- Rate limiting is implemented to prevent abuse
- All requests are logged using Morgan

## Development

1. Run the server in development mode:
   ```bash
   npm run dev
   ```
2. Test the webhook endpoint using curl:
   ```bash
   curl -X POST -H "Content-Type: application/json" -d @example_payload.json http://localhost:3000/api/webhook
   ```

## Dependencies

- express: ^4.17.1
- typescript: ^4.3.5
- morgan: ^1.10.0
- helmet: ^4.6.0
- express-jwt: ^7.2.1
- dotenv: ^10.0.0

## License

MIT
      