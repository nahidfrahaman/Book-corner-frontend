import { Link } from "react-router-dom";
import { IBooks } from "../../type/commonInterface";

export default function BookCards({ book }: IBooks) {
  const date = book.publicationDate;

  return (
    <div>
      <Link
        to={`/bookDetails/${book._id}`}
        className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6 text-gray-700">
          <h2 className="font-bold">Title :{book.title}</h2>
          <h3>Author : {book.author}</h3>
          <p>Genre : {book.genre}</p>
          <p>Publication date : {date.substring(0, 10)}</p>
        </div>
      </Link>
    </div>
  );
}
