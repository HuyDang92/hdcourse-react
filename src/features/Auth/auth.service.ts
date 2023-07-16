import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi: any = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
  endpoints: (builder) => ({
    currentUser: builder.mutation<any, any>({
      query(token) {
        return {
          url: '/api/user',
          method: 'POST',
          headers: { token },
        };
      },
    }),
  }),
});

export const { useCurrentUserMutation } = userApi;
