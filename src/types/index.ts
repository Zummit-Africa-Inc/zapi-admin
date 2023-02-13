export type UserType = {
  createdOn: Date | string;
  email: string;
  fullName: string;
};

export type EndpointType = {
  description: string;
  id: string;
  method: string;
  name: string;
  route: string;
};

export type FeedbackType = {
  id: string;
  createdOn: Date | string;
  createdBy?: string;
  updatedOn?: Date | string;
  updatedBy?: string;
  deletedOn?: Date | string;
  deletedBy?: string;
  name: string;
  email: string;
  title: string;
  body: string;
  category: string;
};

export interface ApiType {
  apiId: string;
  categoryId: string;
  createdOn: Date | string;
  name: string;
  owner: string;
  popularity: number;
  rating: string;
  status: string;
  subscriptions: Array<string>;
  subscriptionCount: number;
  successfulCalls: number;
  totalCalls: number;
  totalErrors: number;
  totalLatency: number;
  updatedOn: Date | string;
  visibilty: string;
}

export type AnalyticsType = {
  name: string;
  subscriptionCount: string;
  totalCalls: string;
  successfulCalls: string;
  totalErrors: string;
  totalLatency: string;
};
