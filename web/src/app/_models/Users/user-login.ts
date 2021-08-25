import { Gender } from './user-for-register';

export class UserLogin {
  constructor(userName?: string, password?: string, rememberMe?: boolean) {
    this.userName = userName;
    this.password = password;
    this.rememberMe = rememberMe;
  }

  userName: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResult {
  token: string;
  user: UserLoginResult;
}

export interface UserLoginResult
{
    id: number;
    userName: string;
    firstName: string;
    fullName: string;
    jobTitle: string;
    gender: Gender;
    created: Date | string;
    lastActive: Date | string;
    photoURL: string;
    roles?: string[];
    configuration: string;
}