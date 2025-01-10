import React from "react";
import { books } from "../db/books.db";
import { ArrowRight } from "lucide-react";

const Trending = () => {
  const trendingBooks = books.slice(0, 5);

  return (
    <section className="bg-[#167D7F] py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trending Books
          <span className="ml-2 inline-block animate-pulse">🔥</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {trendingBooks.slice(0, 4).map((book) => (
              <div
                key={book.id}
                className="bg-[#29A0B1] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#98D7C2] hover:text-[#167D7F]"
              >
                <div className="relative pb-[56.25%]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-[#DDFFE7] text-sm">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-[#29A0B1] rounded-lg overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:bg-[#98D7C2] hover:text-[#167D7F]">
              <div className="relative pb-[100%]">
                <img
                  src={trendingBooks[4].image}
                  alt={trendingBooks[4].title}
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">
                  {trendingBooks[4].title}
                </h3>
                <p className="text-[#DDFFE7] mb-4">{trendingBooks[4].author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#DDFFE7]">
                    ${trendingBooks[4].discountedPrice.toFixed(2)}
                  </span>
                  <div className="flex items-center">
                    <span className="text-[#98D7C2] mr-1">★</span>
                    <span>{trendingBooks[4].rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#98D7C2] hover:bg-[#DDFFE7] text-[#167D7F] font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm inline-flex items-center">
            Explore Trending
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
