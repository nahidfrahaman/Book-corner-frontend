import { Link } from "react-router-dom";
import { IBooks } from "../../type/commonInterface";
interface CardDetailsProps {
  book: IBooks;
}

export default function CardDetails({ book }: CardDetailsProps) {
  return (
    <div>
      <div className="h-76 rounded-lg bg-gray-100 my-4">
        <Link to="/allbookspage" className="group relative block bg-black">
          <img
            alt="Developer"
            src={book?.img}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              {book.title}
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              {book.author}
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
