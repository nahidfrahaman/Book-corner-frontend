/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBooksQuery } from "../../redux/features/Book/bookendpoint";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WishCard({ book }: any) {
  console.log(book.id);
  const { data } = useGetBooksQuery(book.id);
  console.log(data?.data?.data);
  return (
    <>
      {data?.data?.data?.map((datas: any) => (
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {datas?.title}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {datas?.author}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {datas?.publicationDate}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {book?.readingStatus ? "true" : "false"}
          </td>
          <td className="whitespace-nowrap px-4 py-2">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              finished ?
            </a>
          </td>
        </tr>
      ))}
    </>
  );
}
