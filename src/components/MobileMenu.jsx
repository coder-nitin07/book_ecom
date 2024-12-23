import React from "react";
import { Link } from "react-router";

const MobileMenu = () => {
  return (
    <div className="lg:hidden bg-black text-white absolute w-full">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
        <Link
          to="/search"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        >
          Search
        </Link>
        <Link
          to="/genres"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        >
          Genres
        </Link>
        <Link
          to="/best-sellers"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        >
          Best Sellers
        </Link>
        <Link
          to="/top-authors"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        >
          Top Authors
        </Link>
        <Link
          to="/wishlist"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        >
          Wishlist
        </Link>
        <Link
          to="/cart"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        >
          Cart
        </Link>
        <Link
          to="/login"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
