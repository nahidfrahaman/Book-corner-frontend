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
      query: (data) => ({
        url: "/book/create-book",
        method: "POST",
        body: data,
      }),
    }),
    updatedBook: builder.mutation({
      query: ({ id, createdData }) => (
        console.log(id, createdData),
        {
          url: `/book/update/${id}`,
          method: "PATCH",
          body: createdData,
        }
      ),
    }),
    deleteSingleBook: builder.mutation({
      query: (id) => ({
        url: `/book/delete/${id}`,
        method: "DELETE",
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/get-books/${id}`,
      providesTags: ["comments"],
    }),
    postComment: builder.mutation({
      query: ({ id, commentData }) => ({
        url: `/book/comment/${id}`,
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: ["comments"],
    }),
    getCommnet: builder.query({
      query: (id) => `/book/comment/${id}`,
      providesTags: ["comments"],
    }),
    addReadingList: builder.mutation({
      query: (data) => ({
        url: "/readinglist/add",
        method: "POST",
        body: data,
      }),
    }),
    addWishList: builder.mutation({
      query: (data) => ({
        url: "/wishlist/add",
        method: "POST",
        body: data,
      }),
    }),
    getReadingList: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: `/readinglist/get/${data}`,
          method: "GET",
        }
      ),
    }),
    getWishList: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: `/wishlist/get/${data}`,
          method: "GET",
        }
      ),
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
  useDeleteSingleBookMutation,
  usePostCommentMutation,
  useGetCommnetQuery,
  useAddReadingListMutation,
  useGetReadingListMutation,
  useAddWishListMutation,
  useGetWishListMutation,
} = bookenpoint;
