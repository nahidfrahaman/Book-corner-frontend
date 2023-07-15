import { api } from "../../../api/api";

const bookenpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book/get-books/`,
    }),
  }),
});

export const { useGetBooksQuery } = bookenpoint;
