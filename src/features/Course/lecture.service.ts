import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const lectureApi = createApi({
  reducerPath: 'lecture',
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
    addUser: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/current-user/addUser',
          method: 'POST',
          body,
        };
      },
    }),
    deleteUser: builder.mutation<any, any>({
      query(uid) {
        return {
          url: `/api/current-user/delete/${uid}`,
          method: 'DELETE',
        };
      },
    }),
    getAllLecture: builder.query<any, any>({
      query: (idCourse) => `/api/lecture/getAllLecture/${idCourse}`,
    }),
    getLectureById: builder.query<any, string>({
      query: (id) => `/api/lecture/getLectureById/${id}`,
    }),
  }),
});

export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetAllLectureQuery,
  useGetLectureByIdQuery,
} = lectureApi;
