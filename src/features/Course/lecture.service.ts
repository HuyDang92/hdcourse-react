import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const lectureApi = createApi({
  reducerPath: 'lecture',
  tagTypes: ['lectureApi'],
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
          url: '/api/lecture/addUser',
          method: 'POST',
          body,
        };
      },
    }),
    learnedLecture: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/lecture/learnedLecture',
          method: 'PUT',
          body,
        };
      },
      // invalidatesTags: (result, error, body) => [{ type: 'lectureApi', id: 'listLecture' }],
    }),
    deleteUser: builder.mutation<any, any>({
      query(uid) {
        return {
          url: `/api/lecture/delete/${uid}`,
          method: 'DELETE',
        };
      },
    }),
    getAllLecture: builder.query<any, any>({
      query: (idCourse) => `/api/lecture/getAllLecture/${idCourse}`,
      // providesTags: (result) => {
      //   return [{ type: 'lectureApi' as const, id: 'listLecture' }];
      // },
    }),
    getLectureById: builder.query<any, string>({
      query: (id) => `/api/lecture/getLectureById/${id}`,
    }),
  }),
});

export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useLearnedLectureMutation,
  useGetAllLectureQuery,
  useGetLectureByIdQuery,
} = lectureApi;
