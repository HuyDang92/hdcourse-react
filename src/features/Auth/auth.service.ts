import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi: any = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
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
