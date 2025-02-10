
# Gmail Webhook Server

A production-ready Express server for handling Gmail API push notifications.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file using the example provided in `.env.example
4. Start the server:
   ```bash
   npm start
   ```

## Configuration

The server uses environment variables for configuration. Required variables are:

- `PORT`: The port to listen on (default: 3000)
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Your Google service account email
- `AUDIENCE`: Your audience string for webhook verification
- `WEBHOOK_SECRET`: Your webhook secret string

## Webhook Setup

1. Configure your Gmail API webhook in the Google Cloud Console
2. Set the webhook endpoint to your server URL: `http://your-domain.com/webhook`
3. Configure the subscription with appropriate labels and events

## Usage

The server listens for POST requests at `/webhook and verifies the Google signature before processing the payload.

### Event Types

The server handles three types of events:
- `MESSAGE`: New message notifications
- `LABEL`: Label changes
- `LABEL_IDS`: Label ID changes

### Logging

The server uses Winston for logging. You can configure different transports and levels in `server.ts`.

## Security

- All requests are verified using Google's authentication
- Request signatures are validated using the service account email
- Rate limiting and rate limiting can be added as needed
      