
// TypeScript definitions for Gmail API webhook payloads
export interface GmailMessage {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  headers: {
    name: string;
    value: string;
  }[];
}

export interface GmailNotification {
  email: string;
  message: GmailMessage;
  timestamp: number;
  historyId: string;
  labelsAdded: string[];
  labelsRemoved: string[];
}

export interface GmailWebhookPayload {
  messages: GmailNotification[];
  history: {
    id: string;
    type: 'messageAdded' | 'messageDeleted';
  };
}

export interface WebhookResponse {
  status: 'success' | 'error';
  message: string;
}
      