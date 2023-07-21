import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const userApi = createApi({
  reducerPath: 'user',
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
      query({ uid, body }) {
        return {
          url: `/api/current-user/updateProfile/${uid}`,
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
    getAllData: builder.query<any, void>({
      query: () => '/api/current-user/getAllData',
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
  useGetAllDataQuery,
  useGetUserByIdMutation,
  useUpdateProfileMutation,
} = userApi;
