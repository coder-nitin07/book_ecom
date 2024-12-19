import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center shadow-md p-4 bg-zinc-100 w-full px-14">
        {/* LOGO */}
        <div className="font-bold text-3xl tracking-wider font-serif cursor-pointer">
          <Link to={"/home"}>
            BOOK
            <span className="font-sans text-base tracking-normal font-semibold text-zinc-600">
              .com
            </span>
          </Link>
        </div>
        {/* LINKS */}
        <div className="flex gap-6 font-semibold text-lg">
          <Link className="cursor-pointer hover:text-zinc-600 hover:scale-110 transform transition duration-300 ease-in-out">
            Search
          </Link>
          <Link
            to={"/genres"}
            className="cursor-pointer hover:text-zinc-600 hover:scale-110 transform transition duration-300 ease-in-out"
          >
            Genres
          </Link>
          <Link
            to={"/best-sellers"}
            k
            className="cursor-pointer hover:text-zinc-600 hover:scale-110 transform transition duration-300 ease-in-out"
          >
            Best Sellers
          </Link>
          <Link
            to={"/top-authors"}
            k
            className="cursor-pointer hover:text-zinc-600 hover:scale-110 transform transition duration-300 ease-in-out"
          >
            Top Authors
          </Link>
        </div>
        {/* ICONS */}
        <div className="flex items-center gap-4">
          {/* WISHLIST */}
          <Link
            to={"/wishlist"}
            className="cursor-pointer hover:text-zinc-600 hover:scale-125 transform transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Link>
          {/* CART */}
          <Link
            to={"/cart"}
            className="cursor-pointer hover:text-zinc-600 hover:scale-125 transform transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>

          <Link to={"/login"} className="">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700  font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer mt-2 ml-2"
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
