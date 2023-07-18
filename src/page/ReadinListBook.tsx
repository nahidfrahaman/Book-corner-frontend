/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { IBook } from "../components/ui/BookCards";
import TableCard from "../components/ui/TableCard";
import { useGetReadingListMutation } from "../redux/features/Book/bookendpoint";
import { useAppSelector } from "../redux/hooks";

export default function ReadinListBook() {
  const [getReadingList, { data }] = useGetReadingListMutation();
  const { email } = useAppSelector((state) => state.isUserExist);

  useEffect(() => {
    getReadingList(email);
  }, [email]);
  // Empty dependency array to run the effect only once
  console.log(data?.data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                publication Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Reading Status
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          {data?.data?.map((data: IBook) => (
            <TableCard book={data}></TableCard>
          ))}
          <tbody className="divide-y divide-gray-200"></tbody>
        </table>
      </div>
    </div>
  );
}
