import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const courseApi = createApi({
  reducerPath: 'course',
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
    deleteUser: builder.mutation<any, any>({
      query(uid) {
        return {
          url: `/api/current-user/delete/${uid}`,
          method: 'DELETE',
        };
      },
    }),
    updateProfile: builder.mutation<any, any>({
      query(body) {
        return {
          url: `/api/current-user/updateProfile`,
          method: 'PUT',
          body,
        };
      },
    }),
    ratingCourse: builder.mutation<any, any>({
      query(body) {
        return {
          url: `/api/course/ratingCourse`,
          method: 'POST',
          body,
        };
      },
    }),
    getCourseById: builder.query<any, string>({
      query: (id) => `/api/course/getCourseById/${id}`,
    }),
    getAllCourse: builder.query<any, number>({
      query: (limit) => `/api/course/getAllData/${limit}`,
    }),
    getAllDataCatHot: builder.query<any, void>({
      query: () => '/api/course/getAllDataCatHot',
    }),
    getAllDataByIdCat: builder.query<any, any>({
      query: ({ idCategory, pageSize, currentPage }) =>
        `/api/course/getAllDataByIdCat/${idCategory}/${pageSize}/${currentPage}`,
    }),
    getAllDataFree: builder.query<any, any>({
      query: ({ idCategory, pageSize, currentPage, free }) =>
        `/api/course/getAllDataFree/${idCategory}/${pageSize}/${currentPage}/${free}`,
    }),
    getAllDataByName: builder.query<any, any>({
      query: ({ keywords, pageSize, currentPage }) =>
        `/api/course/getAllDataByName/${keywords}/${pageSize}/${currentPage}`,
    }),
    getRatingCouse: builder.query<any, any>({
      query: (idCourse) => `/api/course/getRatingCouse/${idCourse}`,
    }),
    getDataLimit: builder.query<any, any>({
      query: ({ pageSize, currentPage }) => `/api/course/getDataLimit/${pageSize}/${currentPage}`,
    }),
  }),
});

export const {
  useDeleteUserMutation,
  useRatingCourseMutation,
  useGetAllCourseQuery,
  useLazyGetAllCourseQuery,
  useGetAllDataCatHotQuery,
  useGetCourseByIdQuery,
  useUpdateProfileMutation,
  useGetAllDataByIdCatQuery,
  useLazyGetAllDataFreeQuery,
  useLazyGetAllDataByNameQuery,
  useGetRatingCouseQuery,
  useGetDataLimitQuery,
} = courseApi;
