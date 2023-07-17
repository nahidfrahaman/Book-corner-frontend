import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["addBook"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).token;
      console.log(token);
      console.log("token from createApi: ", token);
      if (token) {
        headers.set("authorization", String(token));
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
