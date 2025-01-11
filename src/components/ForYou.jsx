import React from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../db/books.db";

const ForYou = () => {
  const navigate = useNavigate();

  const forYouBooks = React.useMemo(() => {
    return [...books].sort(() => 0.5 - Math.random()).slice(0, 6);
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <section className="bg-[#DDFFE7] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#167D7F]">
          For You
          <span className="ml-2 inline-block animate-bounce">📚</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {forYouBooks.map((book, index) => (
            <div
              key={book.id}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
              onClick={() => handleBookClick(book.id)}
            >
              <div className="w-1/3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <h3 className="font-semibold text-lg mb-2 text-[#167D7F] line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#29A0B1] font-bold">
                    ${book.discountedPrice.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    <span className="text-[#98D7C2] mr-1">★</span>
                    <span className="text-sm text-gray-600">{book.rating}</span>
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

export default ForYou;

