
// TypeScript definitions for Gmail webhook payloads
export type GmailEventPayload = {
  type: string;
  apiVersion: string;
  requestId: string;
};

export type Message = {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  headers: {
    name: string;
    value: string;
  }[];
};

export type Label = {
  id: string;
  name: string;
  type: string;
  color: {
    color: {
      rgbHex: string;
    };
  };
};

export type LabelIds = {
  labelIds: string[];
};

export type GmailPayload = {
  payload: {
    message: Message;
    label: Label;
    labelIds: LabelIds;
  };
};
      