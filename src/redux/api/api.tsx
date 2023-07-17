import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["addBook"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
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
