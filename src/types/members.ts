export interface Member {
    id:                   number;
    userId:               number;
    teamId:               number;
    accepted:             boolean;
    role:                 string;
    disableImpersonation: boolean;
    user:                 User;
}

export interface User {
    avatarUrl: string;
    username:  string;
    name:      string;
    email:     string;
    bio:       string;
    metadata:  Metadata;
}

export interface Metadata {
    stripeCustomerId: string;
}