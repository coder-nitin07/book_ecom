import React from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../db/books.db.js";

const RecentlyAddedBooks = () => {
  const navigate = useNavigate();
  const recentBooks = React.useMemo(() => {
    return [...books].sort((a, b) => b.id - a.id).slice(0, 4);
  }, []);

  return (
    <section className="bg-[#167D7F] py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Recently Added
          <span className="ml-2 inline-block animate-bounce">🆕</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {recentBooks.map((book) => (
            <div
              key={book.id}
              className="bg-[#29A0B1] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:bg-[#98D7C2] hover:text-[#167D7F] cursor-pointer"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              <div className="relative pb-[133%]">
                <img
                  src={book.image}
                  alt={book.title}
                  className="absolute h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-[#98D7C2] text-[#167D7F] px-2 py-1 text-xs font-bold m-2 rounded">
                  New
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-[#DDFFE7] text-sm mb-2">{book.author}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#DDFFE7] font-bold">
                    ${book.discountedPrice.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    <span className="text-[#98D7C2] mr-1">★</span>
                    <span className="text-sm">{book.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;

