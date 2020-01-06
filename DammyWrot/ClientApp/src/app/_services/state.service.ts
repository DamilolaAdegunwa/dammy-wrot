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
    Id: number;
    Name: string;
    name: string;
    Token: string;
    Email: string;
    Password: string;
    DateCreated: Date | string;
    IsVerified: boolean;
    //Posts: Post[];
}