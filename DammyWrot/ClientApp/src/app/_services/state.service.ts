import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StateService {
  User: User;
  ServerBaseUrl: string;
  constructor() {
    this.ServerBaseUrl = "http://localhost:64892";
  }
}

export interface User {
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

export interface Post {
  id: number;
  content: string;
  dateCreated: Date | string;
  likes: number;
  user: User;
  comments: Comment[];
}
