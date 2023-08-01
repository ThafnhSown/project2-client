import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/v1/api" }),
  endpoints: (builder) => ({
    findProblemById: builder.query({
      query: (params) => ({
        url: "/problem/" + params,
      }),
    }),
    getAllProblems: builder.query({
      query: () => "/problem/all",
    }),
    adminRegister: builder.mutation({
      query: (params) => ({
        url: "user/register",
        method: "POST",
        params: params,
      }),
    }),
    addProblem: builder.mutation({
      query: (body) => ({
        url: "/problem/add",
        method: "POST",
        body: body,
        prepareHeaders: (headers) => {
          headers.set("Content-Type", "multipart/form-data");
          return headers;
        },
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.status,
    }),
  }),
});

export const { useGetAllProblemsQuery, useAddProblemMutation } = userApi;
