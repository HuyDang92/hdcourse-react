import { Timestamp } from 'firebase/firestore';

export interface IUserInfo {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
  role: string;
  active: boolean;
  accessToken: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
