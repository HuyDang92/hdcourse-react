export interface ICourse {
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
  createdAt: Date;
  updatedAt: Date;
}
export interface IBlog {
  avatar: string;
  title: string;
  thumb: string;
  author: string;
  topic: string;
  shortDescription: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
