import React from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../db/books.db";

const TopDiscounts = () => {
  const navigate = useNavigate();

  const topDiscountBooks = React.useMemo(() => {
    return [...books]
      .sort((a, b) => b.discountPercent - a.discountPercent)
      .slice(0, 5);
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <section className="bg-[#DDFFE7] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#167D7F]">
          Top Discounts
          <span className="ml-2 inline-block animate-pulse">💸</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => handleBookClick(topDiscountBooks[0].id)}
            >
              <div className="relative pb-[133%]">
                <img
                  src={topDiscountBooks[0].image}
                  alt={topDiscountBooks[0].title}
                  className="absolute h-full w-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#29A0B1] text-white px-2 py-1 text-lg font-bold">
                  {topDiscountBooks[0].discountPercent}% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-[#167D7F]">
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
                    <span className="text-[#29A0B1] font-bold text-2xl">
                      ${topDiscountBooks[0].discountedPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#98D7C2] mr-1">★</span>
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
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex cursor-pointer"
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
                  <div className="bg-[#29A0B1] text-white px-2 py-1 text-xs font-bold inline-block mb-2 rounded">
                    {book.discountPercent}% OFF
                  </div>
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
      </div>
    </section>
  );
};

export default TopDiscounts;