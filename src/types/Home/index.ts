import { Timestamp } from 'firebase/firestore';

export interface ICourse {
  id_category: string;
  thumb: string;
  title: string;
  author: string;
  rating: number;
  ratingCount: number;
  price: number;
  description: string;
  tree: boolean;
  totalLecture: number;
  totalStudent: number;
  totalTimeVideo: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
export interface IBlog {
  avatar: string;
  title: string;
  thumb: string;
  author: string;
  topic: string;
  shortDescription: string;
  price: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
export interface ICategories {
  name: string;
  submenu: string[];
  subcategories: {
    id: string;
    name: string;
    parent_ID: string;
    subcategories: {
      name: string;
      parent_ID: string;
    }[];
  }[];
}
