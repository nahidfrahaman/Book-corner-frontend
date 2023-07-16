/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useGetBooksQuery } from "../../redux/features/Book/bookendpoint";
import { IBooks } from "../../type/commonInterface";
import CardDetails from "./CardDetails";

export default function Card() {
  const { data } = useGetBooksQuery(undefined);

  return (
    <div className="container mx-auto">
      <div className="grid  bg- grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-full ">
        {data?.data.data.map((book: IBooks, index: number) => (
          <CardDetails key={index} book={book}></CardDetails>
        ))}
      </div>
    </div>
  );
}
