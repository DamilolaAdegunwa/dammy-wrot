import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  User: User;
  constructor() { }
}

export interface User
{
    // Id: number;
    // Name: string;
    // Token: string;
    // Email: string;
    // Password: string;
    // DateCreated: Date | string;
    // IsVerified: boolean;
    ////Posts: Post[];

    id: number;
    name: string;
    token: string;
    email: string;
    password: string;
    dateCreated: Date | string;
    isVerified: boolean;
    //posts: Post[];
}