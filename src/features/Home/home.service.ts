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
    getOverviewAnalyticByRole: builder.query<any, string>({
      query: (role) => ({
        url: 'api/projects/overview-analytics-by-role?role=' + role,
      }),
    }),
    getOverviewStatusProject: builder.query<any, string>({
      query: (type) => ({
        url: '/api/projects/overview-by-status-projects-and-base?type=' + type,
      }),
    }),
    getOverviewCourse: builder.query<any, any>({
      query: (args) => {
        const { type, page, limit = '' } = args;
        return {
          url: `/api/projects/overview-project-by-status?type=${type}&page=${page}&limit=${limit}`,
        };
      },
    }),
    getProjectOverviewTable: builder.query<StatisticalHomeBoxProps, void>({
      query: () => '/api/home/overview-table',
    }),
    getProjectOverviewTableDetail: builder.query<any, string>({
      query: (base) => {
        return {
          url: `/api/home/overview-table/${base}`,
        };
      },
    }),
  }),
});

export const {
  useGetProjectOverviewQuery,
  useGetOverviewAnalyticByRoleQuery,
  useGetOverviewStatusProjectQuery,
  useGetOverviewCourseQuery,
  useGetProjectOverviewTableQuery,
  useGetProjectOverviewTableDetailQuery,
} = homeApi;
