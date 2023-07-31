import { Timestamp } from 'firebase/firestore';

export interface IWishList {
  idUser: string;
  idCourse: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface IUserInfo {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
  role: string;
  active: boolean;
  // linkSocial: string[];
  accessToken: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
