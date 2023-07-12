// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, setDoc, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'firebase.jsx';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      async queryFn({ data, idUser }) {
        try {
          const docRef = doc(db, 'users', idUser);
          await setDoc(docRef, {
            ...data,
          });
          return { data: 'Resiregister successfully' };
        } catch (error) {
          return { error };
        }
      },
    }),
    // getOneUser: builder.query({
    //   async queryFn(idUser) {
    //     try {
    //       const docRef = doc(db, 'users', idUser);
    //       const docSnap = await getDoc(docRef);
    //       return { data: docSnap };
    //     } catch (error) {
    //       return { error };
    //     }
    //   },
    // }),
  }),
});

export const { useAddUserMutation } = userApi;
