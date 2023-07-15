import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book/get-books/`,
    }),
  }),
});

export const { useGetBooksQuery } = api;
