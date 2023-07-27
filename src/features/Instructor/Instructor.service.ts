import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const instructorApi = createApi({
  reducerPath: 'instructor',
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
    createInstructor: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/instructor/create',
          method: 'POST',
          body,
        };
      },
    }),
    addInstructor: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/instructor/addInstructor',
          method: 'POST',
          body,
        };
      },
    }),
    deleteInstructor: builder.mutation<any, any>({
      query(uid) {
        return {
          url: `/api/instructor/delete/${uid}`,
          method: 'DELETE',
        };
      },
    }),
    getInstructorById: builder.query<any, string>({
      query: (id) => `/api/instructor/getInstructorById/${id}`,
    }),
    getAllInstructor: builder.query<any, void>({
      query: () => '/api/instructor/getAllData',
    }),
  }),
});

export const {
  useCreateInstructorMutation,
  useAddInstructorMutation,
  useDeleteInstructorMutation,
  useGetAllInstructorQuery,
  useLazyGetAllInstructorQuery,
  useLazyGetInstructorByIdQuery,
} = instructorApi;
