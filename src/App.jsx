import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import CarSearch from "./Pages/CarSearch";
import Wishlist from "./Pages/Wishlist";

import DarkModeToggle from "./Components/DarkMode/DarkModeToggle";


export default function App() {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🚗 Car Finder</h1>
        <div className="flex gap-2">
          {location.pathname !== "/wishlist" ? (
            <Link to="/wishlist" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Wishlist ({wishlist.length})
            </Link>
          ) : (
            <Link to="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Back to Search
            </Link>
          )}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<CarSearch wishlist={wishlist} setWishlist={setWishlist} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
      </Routes>
    </div>
  );
}
