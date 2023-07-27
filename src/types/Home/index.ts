import { Timestamp } from 'firebase/firestore';

export interface ICourse {
  id: string;
  id_category: string;
  idIntructor: string;
  thumb: string;
  title: string;
  author: string;
  rating: number;
  ratingCount: number;
  price: number;
  level: string;
  description: string;
  tree: boolean;
  totalLecture: number;
  totalStudent: number;
  totalTimeVideo: number;
  learned: string[];
  requiments: string[];
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
