import {  User } from 'firebase/auth';

export interface UserData {
  user?: User,
  displayName?: string;
  email?: string;
  photoURL?: string;
}

export interface userInformation {
  uid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  zipCode?: string;
  country?: string;
  streetAddress?: string;
  city?: string;
  province?: string;
  additionalInfo?: string;
}

