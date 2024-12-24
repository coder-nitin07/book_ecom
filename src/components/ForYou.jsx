import React from "react";
import { books } from "../db/books.db";
import { ArrowRight } from "lucide-react";

const ForYou = () => {
  const forYouBooks = React.useMemo(() => {
    return [...books].sort(() => 0.5 - Math.random()).slice(0, 6);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          For You
          <span className="ml-2 inline-block animate-bounce">📚</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {forYouBooks.map((book, index) => (
            <div
              key={book.id}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="w-1/3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold">
                    ${book.discountedPrice.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm text-gray-600">{book.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm inline-flex items-center">
            View More
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
