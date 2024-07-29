import {  User } from 'firebase/auth';

export interface UserData {
  user?: User,
  displayName?: string;
  email?: string;
  photoURL?: string;
}

export interface UserInformation {
  userId?:string,
  displayName?:string;
  email?:string;
}

export interface UserResponse {
  id?: string;
  userId?: string;
  displayName?: string;
  email?: string;
}

