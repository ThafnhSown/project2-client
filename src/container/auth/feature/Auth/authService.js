import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/v1/api" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json();
            if (responseBody.status !== "error") {
              cookies.set(
                "access_token",
                responseBody?.metadata?.tokens?.access_token,
                {
                  maxAge: 100000,
                },
              );
              cookies.set("user_id", responseBody?.metadata?.user?._id, {
                maxAge: 100000,
              });
            }
            return responseBody;
          },
        };
      },
    }),
    signup: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: body,
          responseHandler: async (response) => {
            const responseBody = await response.json();
            if (responseBody.status !== "error") {
              cookies.set(
                "access_token",
                responseBody?.metadata?.tokens?.access_token,
                {
                  maxAge: 100000,
                },
              );
              cookies.set("user_id", responseBody?.metadata?.user?._id, {
                maxAge: 100000,
              });
            }
            return responseBody;
          },
        };
      },
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: "/auth/logout",
          method: "POST",
          responseHandler: async (response) => {
            const responseBody = await response.json();
            if (responseBody.code !== 403) {
              cookies.remove("access_token");
              cookies.remove("user_id");
            }
            return responseBody;
          },
        };
      },
    }),
    oAuthLogin: builder.query({
      query: () => ({
        url: "/oauth/success",
        credentials: "include",
        responseHandler: async (response) => {
          const responseBody = await response.json();
          console.log("responseBody", responseBody);
          if (response.ok) {
            cookies.set(
              "access_token",
              responseBody?.metadata?.tokens?.accessToken,
              {
                maxAge: 100000,
              },
            );
            cookies.set("user_id", responseBody?.metadata?.user?._id, {
              maxAge: 100000,
            });
          }
          return responseBody;
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } =
  authApi;
