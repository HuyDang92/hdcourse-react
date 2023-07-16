// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, setDoc, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'firebase.jsx';

export const blogsApi = createApi({
  reducerPath: 'blogs',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchBlogs: builder.query<any, void>({
      async queryFn() {
        try {
          const blogRef = collection(db, 'blogs');
          const querySnapshot = await getDocs(blogRef);
          let blogs: any[] = [];
          querySnapshot.forEach((doc) => {
            blogs.push({ id: doc.id, ...doc.data() });
          });
          return { data: blogs };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useFetchBlogsQuery } = blogsApi;
