// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, setDoc, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'firebase.jsx';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchCategories: builder.query<any, void>({
      async queryFn() {
        try {
          const categoriesRef = collection(db, 'categories');
          const querySnapshot = await getDocs(categoriesRef);
          let categories: any[] = [];
          querySnapshot.forEach((doc) => {
            categories.push({ id: doc.id, ...doc.data() });
          });
          return { data: categories };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useFetchCategoriesQuery } = categoriesApi;
