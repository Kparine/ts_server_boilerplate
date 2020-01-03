export interface IUser {
    userFirst: string;
    userLast: string;
    userEmail: string;
    userPhone: string;
    description?: string;
    id: string;
}

export interface ICreateUser {
    userFirst: string;
    userLast: string;
    userEmail: string;
    userPhone: string;
    description?: string;
}