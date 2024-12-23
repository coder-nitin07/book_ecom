import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              to={"/home"}
              className="font-bold text-3xl tracking-wider font-serif cursor-pointer"
            >
              BOOK
              <span className="font-sans text-base tracking-normal font-semibold text-gray-600">
                .com
              </span>
            </Link>
          </div>
          {/* MENU BUTTON */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          {/* LINKS */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 font-semibold text-lg">
            <Link
              to="/search"
              className="cursor-pointer hover:text-gray-600 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              Search
            </Link>
            <Link
              to="/genres"
              className="cursor-pointer hover:text-gray-600 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              Genres
            </Link>
            <Link
              to="/best-sellers"
              className="cursor-pointer hover:text-gray-600 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              Best Sellers
            </Link>
            <Link
              to="/top-authors"
              className="cursor-pointer hover:text-gray-600 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              Top Authors
            </Link>
          </div>
          {/* ICONS */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link
              to="/wishlist"
              className="cursor-pointer hover:text-gray-600 hover:scale-125 transform transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Link>
            <Link
              to="/cart"
              className="cursor-pointer hover:text-gray-600 hover:scale-125 transform transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
            <Link to="/login" className="flex items-center justify-center">
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-xl text-sm px-5 py-2.5 cursor-pointer"
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
