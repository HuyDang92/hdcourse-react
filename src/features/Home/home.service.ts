// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, setDoc, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'firebase.jsx';

export const homeApi = createApi({
  reducerPath: 'categories',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
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
    addUser: builder.mutation({
      async queryFn({ data, idUser }) {
        try {
          const docRef = doc(db, 'users', idUser);
          // Add the document with the provided data
          await setDoc(docRef, {
            ...data,
          });
          return { data: 'Resiregister successfully' };
        } catch (error) {
          return { error };
        }
      },
    }),
    getUser: builder.query({
      async queryFn(idUser) {
        try {
          const docRef = doc(db, 'users', idUser);
          const docSnap = await getDoc(docRef);
          return { data: docSnap };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useFetchCategoriesQuery, useGetUserQuery, useAddUserMutation } = homeApi;
