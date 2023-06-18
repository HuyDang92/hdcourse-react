import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StatisticalHomeBoxProps } from 'types/Home';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getProjectOverview: builder.query<StatisticalHomeBoxProps, void>({
      query: () => '/api/home/overview',
    }),
    getOverviewAnalyticByRole: builder.query<any, any>({
      query: (role) => ({
        url: 'api/projects/overview-analytics-by-role?role=' + role,
      }),
    }),
    getOverviewStatusProject: builder.query<any, any>({
      query: (type) => ({ 
        url: '/api/projects/overview-by-status-projects-and-base?type=' + type 
      }),
    }),
  }),
});

export const { useGetProjectOverviewQuery, useGetOverviewAnalyticByRoleQuery, useGetOverviewStatusProjectQuery } = homeApi;
