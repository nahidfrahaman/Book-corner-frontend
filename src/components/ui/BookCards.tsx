/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link } from "react-router-dom";

export interface IBook {
  _id?: string | undefined | null;
  title?: string;
  author?: string;
  genre?: string;
  publicationDate?: Date;
  reviews?: [];
  img: string;
}

export default function BookCards({ book }: { book: IBook }) {
  const date = book.publicationDate;

  return (
    <div>
      <Link
        to={`/bookDetails/${book._id}`}
        className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        <img
          alt="Office"
          src={book?.img}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6 text-gray-700">
          <h2 className="font-bold">Title :{book.title}</h2>
          <h3>Author : {book.author}</h3>
          <p>Genre : {book.genre}</p>
          <p>Publication date : {date!.toString().substring(0, 10)}</p>
        </div>
      </Link>
    </div>
  );
}
