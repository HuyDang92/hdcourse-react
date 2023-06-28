import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StatisticalHomeBoxProps } from 'types/Home';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  // refetchOnMountOrArgChange: 5,
  endpoints: (builder) => ({
    getProjectOverview: builder.query<StatisticalHomeBoxProps, void>({
      query: () => '/api/home/overview',
    }),
  }),
});

export const { useGetProjectOverviewQuery } = homeApi;
