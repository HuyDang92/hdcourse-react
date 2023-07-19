import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'stores/store';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.currentUser?.accessToken;
      if (token) {
        headers.set('token', `${token}`);
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
  }),
});

export const { useCreateUserMutation } = userApi;
