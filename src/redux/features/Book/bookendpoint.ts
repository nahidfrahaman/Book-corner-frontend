import { api } from "../../api/api";

const bookenpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book/get-books/`,
    }),
    getAllBooks: builder.query({
      query: () => "/book/all-books",
    }),
  }),
});

export const { useGetBooksQuery, useGetAllBooksQuery } = bookenpoint;
