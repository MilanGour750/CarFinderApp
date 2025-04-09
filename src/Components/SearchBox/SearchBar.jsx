import React from "react";
import { BiSearch } from "react-icons/bi"; // Import search icon from react-icons

const SearchBar = ({ search, setSearch }) => (
  <div className="relative w-full">
    <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by car name..."
      className="w-full pl-10 p-3 border rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-300 transition"
    />
  </div>
);

export default SearchBar;
