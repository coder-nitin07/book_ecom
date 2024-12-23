import React from "react";

const books = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    image:
      "https://www.madrasshoppe.com/207337-large_default/harry-potter-7-volume-children-s-paperback-boxed-set-the-complete-collection-set-of-7-volumes-jk-rowling.jpg",
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    image:
      "https://www.madrasshoppe.com/207337-large_default/harry-potter-7-volume-children-s-paperback-boxed-set-the-complete-collection-set-of-7-volumes-jk-rowling.jpg",
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    image:
      "https://www.madrasshoppe.com/207337-large_default/harry-potter-7-volume-children-s-paperback-boxed-set-the-complete-collection-set-of-7-volumes-jk-rowling.jpg",
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    image:
      "https://www.madrasshoppe.com/207337-large_default/harry-potter-7-volume-children-s-paperback-boxed-set-the-complete-collection-set-of-7-volumes-jk-rowling.jpg",
  },
];

const Recommended = () => {
  return (
    <div className="mx-4 md:mx-14 my-10 md:my-16">
      <div className="bg-zinc-800 text-white p-4 rounded-xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-center py-4">
          Trending Books 🔥
        </h1>

        {/* CARD CONTAINER */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-black mx-2 md:mx-20 my-4 md:my-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white rounded-xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="m-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-zinc-400 rounded-b-xl">
                <div className="p-4">
                  <h1 className="text-lg md:text-xl font-semibold">
                    {book.title}
                  </h1>
                  <p className="text-sm md:text-base font-semibold text-zinc-700">
                    {book.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
