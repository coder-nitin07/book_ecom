import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import BestSellers from "./pages/BestSellers";
import TopAuthors from "./pages/TopAuthors";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import LogIn from "./pages/Login";
import "./index.css";
import "./app.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/top-authors" element={<TopAuthors />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
