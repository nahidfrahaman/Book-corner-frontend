import BookCards from "../components/ui/BookCards";
import { useGetAllBooksQuery } from "../redux/features/Book/bookendpoint";
import { IBooks } from "../type/commonInterface";

export default function AllBooks() {
  const { data } = useGetAllBooksQuery(undefined);
  console.log(data?.data);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div className="p-6  lg:h-screen dark:bg-teal-600 dark:text-gray-100">
        <div className="relative p-2 text-teal-600">
          <label htmlFor="Search" className="sr-only p-2">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm p-2"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="text-lg lg:text-2xl font-bold">
          <p className="">filter ?</p>
        </div>
        <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-lg font-medium text-white"
          >
            genre
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm p-2.5"
          >
            <option value=""></option>
            <option value="fricton">fricton</option>
            <option value="non-fricton">non-friction</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-lg font-medium text-white"
          >
            publicaton Date
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm p-2.5"
          >
            <option value=""></option>
            <option value="fricton">fricton</option>
            <option value="non-fricton">non-friction</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-100 lg:col-span-2">
        <div className="grid grid-cols-2 gap-3">
          {data?.data.map((book: IBooks) => (
            <BookCards book={book}></BookCards>
          ))}
        </div>
      </div>
    </div>
  );
}
