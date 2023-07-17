import { api } from "../../api/api";

const bookenpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book/get-books/`,
    }),
    getAllBooks: builder.query({
      query: () => `/book/get-books/`,
    }),
    getallBooks: builder.mutation({
      query: (url) => ({
        url: url ? `/book/all-books/?searchTerm=${url}` : `/book/all-books/`,
        method: "GET",
        providesTags: ["addBook"],
      }),
    }),
    createABook: builder.mutation({
      query: (data) => ({
        url: `/book/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetallBooksMutation,
  useGetAllBooksQuery,
  useCreateABookMutation,
} = bookenpoint;
