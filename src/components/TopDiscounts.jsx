import React from "react";
import { books } from "../db/books.db";
import { ArrowRight } from "lucide-react";

const TopDiscounts = () => {
  const topDiscountBooks = React.useMemo(() => {
    return [...books]
      .sort((a, b) => b.discountPercent - a.discountPercent)
      .slice(0, 5);
  }, []);

  return (
    <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Top Discounts
          <span className="ml-2 inline-block animate-pulse">💸</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative pb-[133%]">
                <img
                  src={topDiscountBooks[0].image}
                  alt={topDiscountBooks[0].title}
                  className="absolute h-full w-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-lg font-bold">
                  {topDiscountBooks[0].discountPercent}% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {topDiscountBooks[0].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {topDiscountBooks[0].author}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through text-lg mr-2">
                      ${topDiscountBooks[0].price.toFixed(2)}
                    </span>
                    <span className="text-red-600 font-bold text-2xl">
                      ${topDiscountBooks[0].discountedPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-600">
                      {topDiscountBooks[0].rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-4">
            {topDiscountBooks.slice(1).map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex"
              >
                <div className="w-1/3">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <div className="bg-red-500 text-white px-2 py-1 text-xs font-bold inline-block mb-2 rounded">
                    {book.discountPercent}% OFF
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold">
                      ${book.discountedPrice.toFixed(2)}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm text-gray-600">
                        {book.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm inline-flex items-center">
            See All Discounts
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDiscounts;
