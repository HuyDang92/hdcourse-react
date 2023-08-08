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
    addCommentLecture: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/lecture/addCommentLecture',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error, body) => [{ type: 'lectureApi', id: 'comments' }],
    }),
    addReplyCommentLecture: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/lecture/addReplyCommentLecture',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: (result, error, body) => [{ type: 'lectureApi', id: 'comments' }],
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
    deleteComment: builder.mutation<any, any>({
      query(idComment) {
        return {
          url: `/api/lecture/deleteComment/${idComment}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, body) => [{ type: 'lectureApi', id: 'comments' }], 
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
    getCommentLecture: builder.query<any, any>({
      query: ({ idLecture, limit }) => `/api/lecture/getCommentLecture/${idLecture}/${limit}`,
      providesTags: (result) => {
        return [{ type: 'lectureApi' as const, id: 'comments' }];
      },
    }),
  }),
});

export const {
  useAddCommentLectureMutation,
  useAddReplyCommentLectureMutation,
  useDeleteCommentMutation,
  useLearnedLectureMutation,
  useGetAllLectureQuery,
  useGetLectureByIdQuery,
  useGetCommentLectureQuery,
} = lectureApi;
