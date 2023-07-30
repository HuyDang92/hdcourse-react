// import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
// import { collection, setDoc, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
// import { db } from 'firebase.jsx';

// export const categoriesApi = createApi({
//   reducerPath: 'categories',
//   baseQuery: fakeBaseQuery(),
//   endpoints: (builder) => ({
//     fetchCategories: builder.query<any, void>({
//       async queryFn() {
//         try {
//           const categoriesRef = collection(db, 'categories');
//           const querySnapshot = await getDocs(categoriesRef);
//           let categories: any[] = [];
//           querySnapshot.forEach((doc) => {
//             categories.push({ id: doc.id, ...doc.data() });
//           });
//           return { data: categories };
//         } catch (error) {
//           return { error };
//         }
//       },
//     }),
//   }),
// });

// export const { useFetchCategoriesQuery } = categoriesApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.currentUser?.accessToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllCat: builder.query<any, void>({
      query: () => '/api/category/getAllCat',
    }),

    getCatLevelOne: builder.query<any, void>({
      query: () => '/api/category/getCatLevelOne',
    }),
    getAllCatLevelTwo: builder.query<any, void>({
      query: () => '/api/category/getAllCatLevelTwo',
    }),
    getAllCatLevelThree: builder.query<any, void>({
      query: () => '/api/category/getAllCatLevelThree',
    }),
    getCatLevelTwo: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/category/getCatLevelTwo',
          method: 'POST',
          body,
        };
      },
    }),
    getCatLevelThree: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/category/getCatLevelThree',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {
  useGetAllCatQuery,
  useGetCatLevelOneQuery,
  useGetCatLevelTwoMutation,
  useGetAllCatLevelThreeQuery,
  useGetAllCatLevelTwoQuery,
  useGetCatLevelThreeMutation,
} = categoriesApi;
