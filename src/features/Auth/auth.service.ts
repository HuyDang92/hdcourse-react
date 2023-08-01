import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const userApi = createApi({
  reducerPath: 'user',
  tagTypes: ['userApi'],
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
      invalidatesTags: (result, error, body) => [{ type: 'userApi', id: 'listUser' }],
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
    getUserById: builder.mutation<any, any>({
      query(body) {
        return {
          url: `/api/current-user/getUserById`,
          method: 'POST',
          body,
        };
      },
    }),
    getUserByIdQuery: builder.query<any, string>({
      query: (id) => `/api/current-user/getUserByIdQuery/${id}`,
    }),
    getAllData: builder.query<any, void>({
      query: () => '/api/current-user/getAllData',
    }),
    addWishList: builder.mutation<any, any>({
      query(body) {
        return {
          url: `/api/current-user/addWishList`,
          method: 'POST',
          body,
        };
      },
    }),
    getWishList: builder.query<any, any>({
      query: (idUser) => `/api/current-user/getWishList/${idUser}`,
    }),
    getDataLimit: builder.query<any, any>({
      query: ({ pageSize, currentPage }) =>
        `/api/current-user/getDataLimit/${pageSize}/${currentPage}`,
      providesTags: (result) => {
        // if (result) {
        //   const final = [
        //     ...result.map(({ id }: any) => ({ type: 'userApi' as const, id: 'listUser' })),
        //     { type: 'userApi' as const, id: 'listUser' },
        //   ];
        //   return final;
        // }
        return [{ type: 'userApi' as const, id: 'listUser' }];
      },
    }),
  }),
});
export const {
  useCreateUserMutation,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetAllDataQuery,
  useGetUserByIdMutation,
  useUpdateProfileMutation,
  useGetUserByIdQueryQuery,
  useAddWishListMutation,
  useGetWishListQuery,
  useGetDataLimitQuery,
} = userApi;
