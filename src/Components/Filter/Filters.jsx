import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
      <input
        type="text"
        name="brand"
        value={filters.brand}
        onChange={handleChange}
        placeholder="Brand"
        className="p-3 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
      <select
        name="fuel"
        value={filters.fuel}
        onChange={handleChange}
        className="p-3 border rounded-md shadow-sm bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      >
        <option value="">Fuel Type</option>
        <option value="gas">Gas</option>
        <option value="diesel">Diesel</option>
      </select>
      <input
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleChange}
        placeholder="Min Price"
        className="p-3 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleChange}
        placeholder="Max Price"
        className="p-3 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
    </div>
  );
};

export default Filters;
