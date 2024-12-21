import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/book-logo.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-zinc-800 text-zinc-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and Description */}
        <div className="flex-shrink-0 mb-4 lg:mb-0">
          <Link to={"/home"} className="flex items-center">
            <img src={logo} alt="Book Logo" className="w-14" />
            <span className="ml-2 text-2xl font-bold">Book.com</span>
          </Link>
          <p className="mt-2 text-sm text-zinc-400 sm:max-w-md max-w-xs">
            Your one-stop destination for all your book needs. Discover, read,
            and share your favorite books with us.
          </p>
        </div>

        {/* Page Nav Links */}
        <div className="flex flex-col space-y-1 mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <Link to="/book" className="hover:text-blue-500">
            Book
          </Link>
          <Link to="/author" className="hover:text-blue-500">
            Author
          </Link>
          <Link to="/collection" className="hover:text-blue-500">
            Collection
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact Us
          </Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col space-y-4 mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold">
            Subscribe to our Newsletter!
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
          >
            {!isSubscribed && (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="p-2 rounded-lg text-black focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2"
                >
                  Subscribe
                </button>
              </>
            )}
            {isSubscribed && (
              <p className="text-green-500">Thank you for subscribing!</p>
            )}
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Book.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
