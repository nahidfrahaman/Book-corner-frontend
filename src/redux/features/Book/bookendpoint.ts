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
    addNewBook: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: "/book/create-book",
          method: "POST",
          body: data,
        }
      ),
    }),
    updatedBook: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: `/book/update/${data}`,
          method: "PATCH",
          body: data,
        }
      ),
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/get-books/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetallBooksMutation,
  useGetAllBooksQuery,
  useAddNewBookMutation,
  useGetSingleBookQuery,
  useUpdatedBookMutation,
} = bookenpoint;
