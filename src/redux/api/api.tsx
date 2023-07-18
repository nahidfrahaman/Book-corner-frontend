import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["addBook", "comments"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-corner-backend-nahidfrahaman.vercel.app/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        headers.set("authorization", String(token));
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
