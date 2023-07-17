import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteSingleBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/Book/bookendpoint";
import { IBooks } from "../type/commonInterface";

export default function SingleBookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
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

  return (
    <div>
      {data && (
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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

                <form className="mt-8">
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
                  <div className="mt-5">Review</div>

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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
