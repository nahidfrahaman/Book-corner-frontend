/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddReadingListMutation,
  useAddWishListMutation,
  useDeleteSingleBookMutation,
  useGetCommnetQuery,
  useGetSingleBookQuery,
  usePostCommentMutation,
} from "../redux/features/Book/bookendpoint";
import { useAppSelector } from "../redux/hooks";
import { IBooks } from "../type/commonInterface";
export default function SingleBookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000000,
  });
  const [deleteSingleBook] = useDeleteSingleBookMutation();
  const book = data?.data;

  const handleDelete = (book: IBooks) => {
    const id = book?._id;
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteSingleBook(id);
      alert("book deleted successfuly");
      navigate("/allbookspage");
    }
  };

  //handle review
  const { register, handleSubmit } = useForm();
  const [postComment] = usePostCommentMutation();

  const onSubmit = (data: any) => {
    const id = book?._id;
    const commentData = {
      reviews: data?.review,
    };
    console.log(commentData);
    postComment({ id, commentData });
  };

  const { data: comments } = useGetCommnetQuery(book?._id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100000,
  });

  const [addReadingList, { data: addBookData }] = useAddReadingListMutation();
  const [addWishlist, { data: wishBookData }] = useAddWishListMutation();

  const { email } = useAppSelector((state) => state.isUserExist);
  const handleReadinglist = () => {
    const addReadinglistData = {
      userEmail: email,
      bookId: book?._id,
      readingStatus: false,
    };
    console.log(addReadinglistData);
    addReadingList(addReadinglistData);
  };
  const handleWishlist = () => {
    const addlistData = {
      userEmail: email,
      bookId: book?._id,
    };

    addWishlist(addlistData);
  };

  if (addBookData) {
    toast.success("book add readling list Successfuly");
  }
  if (wishBookData) {
    toast.success("book add wish list Successfuly");
  }

  return (
    <div>
      {data && (
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt="Les Paul"
                  src={book?.img}
                  className="aspect-square w-full rounded-xl object-cover"
                />
                <div className="grid grid-cols-2 gap-4 lg:mt-4"></div>
              </div>

              <div className="sticky top-0">
                <div className="mt-8 flex justify-between">
                  <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                      {book?.title}
                    </h1>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p className="text-lg font-bold">Author : {book?.author}</p>
                  </div>

                  <button className="mt-2 text-sm font-medium underline">
                    Read More
                  </button>
                </div>

                <div className="mt-8">
                  <fieldset>
                    <legend className="mb-1 text-sm font-medium">
                      Genre: {book?.genre}
                    </legend>
                  </fieldset>

                  <fieldset className="mt-4">
                    <legend className="mb-1 text-sm font-medium">
                      Publication Date :{" "}
                      {book?.publicationDate.substring(0, 10)}
                    </legend>
                  </fieldset>

                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={() => handleDelete(book)}
                      type="submit"
                      className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/editBookPage/${book?._id}`}
                      type="submit"
                      className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    >
                      update
                    </Link>
                    <button
                      onClick={() => handleReadinglist()}
                      type="submit"
                      className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    >
                      Add To ReadingList
                    </button>
                    <button
                      onClick={() => handleWishlist()}
                      type="submit"
                      className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    >
                      Add To Wishlist
                    </button>
                  </div>

                  <div className="mt-5 text-lg font-bold">
                    Reviews :
                    <div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 grid grid-cols-6 gap-6"
                      >
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="LastName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            give your comments ?
                          </label>

                          <input
                            type="text"
                            id="userName"
                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                            {...register("review", {
                              required: "reviews is required",
                            })}
                          />
                          {comments?.data?.reviews?.map((revies: string) => (
                            <div className="p-2 text-teal-300 flex ">
                              <div className="flex flex-col items-center justify-center ">
                                <div className="flex space-x-5">
                                  <img
                                    alt=""
                                    className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                                    src="https://source.unsplash.com/40x40/?portrait?1"
                                  />
                                </div>
                              </div>
                              <div className="ml-5">{revies}</div>
                            </div>
                          ))}
                        </div>

                        {/* <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                          <button className="inline-block shrink-0 rounded-md border border-tel-700 bg-teal-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-700 focus:outline-none focus:ring active:text-blue-500">
                            logIn
                          </button>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Toaster></Toaster>
        </section>
      )}
    </div>
  );
}
