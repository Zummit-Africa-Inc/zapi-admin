
export type UserType = {
      bio: string;
    country?: string;
    createdBy?: string;
    createdOn?: Date | string;
    deletedBy: string;
    deletedOn?: Date | string;
    email: string;
    fullName: string;
    id: string;
    picture?: string;
    subscriptions: Array<string>;
    updatedBy: Date | string;
    updatedOn?: Date | string;
    userId: string;
};

export type ApiType = {
    id: string;
    createdOn?: Date | string;
    createdBy?: string;
    updatedOn?: Date | string;
    updatedBy?: string;
    deletedOn?: Date | string;
    deletedBy?: string;
    name: string;
    description: string;
    base_url: string;
    popularity: number;
    about: string;
    logo_url: string;
    api_website: string;
    term_of_use: string;
    read_me: string;
    contributors: Array<string>;
    status: string;
    visibility: string;
    rating: string;
    service_level: number;
    subscriptions: Array<string>;
    latency: number;
    categoryId: string;
    profileId: string;
    secretKey: string;
    tutorialsId: string;
};

export type EndpointType = {
    description: string;
    id: string;
    method: string;
    name: string;
    route: string;
};

export type FeedbackType = {
    id: string
    createdOn?: Date | string
    createdBy?: string
    updatedOn?: Date | string
    updatedBy?: string
    deletedOn?: Date | string
    deletedBy?: string
    name: string
    email: string
    title: string
    body: string
    category: string
};

export interface AnalyticsType {
    apiId: string
    subscriptionCount: number
    successfulCalls: number
    totalCalls: number
    totalErrors: number
    totalLatency: number
};