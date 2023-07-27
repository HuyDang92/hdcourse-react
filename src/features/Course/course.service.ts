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
    createUser: builder.mutation<any, any>({
      query(body) {
        return {
          url: '/api/current-user/create',
          method: 'POST',
          body,
        };
      },
    }),
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
    updateProfile: builder.mutation<any, any>({
      query(body) {
        return {
          url: `/api/current-user/updateProfile`,
          method: 'PUT',
          body,
        };
      },
    }),
    getCourseById: builder.query<any, string>({
      query: (id) => `/api/course/getCourseById/${id}`,
    }),
    getAllCourse: builder.query<any, void>({
      query: () => '/api/course/getAllData',
    }),
    getAllDataByIdCat: builder.query<any, void>({
      query: () => '/api/course/getAllDataByIdCat',
    }),
  }),
});
// const result = await axios.post(`http://localhost:8000/api/current-user/create`, infoLogin, {
//   headers: { token: `${tokenId}` },
// });
export const {
  useCreateUserMutation,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetAllCourseQuery,
  useLazyGetAllCourseQuery,
  useGetAllDataByIdCatQuery,
  useGetCourseByIdQuery,
  useUpdateProfileMutation,
} = courseApi;
