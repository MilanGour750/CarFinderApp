import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBox/SearchBar";
import Filters from "../Components/Filter/Filters";
import CarCard from "../Components/CarCard/CarCard";
import Pagination from "../Components/Pagination/Pagination";
import { AiOutlineCar } from "react-icons/ai"; // Import icon

const CarSearch = ({ wishlist, setWishlist }) => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ brand: "", fuel: "", minPrice: "", maxPrice: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    axios.get("https://myfakeapi.com/api/cars/")
      .then(res => {
        setCars(res.data.cars);
        setFilteredCars(res.data.cars);
      })
      .catch(err => console.error("API Error", err));
  }, []);

  useEffect(() => {
    let updated = [...cars];
    if (search) updated = updated.filter(car => car.car.toLowerCase().includes(search.toLowerCase()));
    if (filters.brand) updated = updated.filter(car => car.car_brand?.toLowerCase().includes(filters.brand.toLowerCase()));
    if (filters.fuel) updated = updated.filter(car => car.car_fuel_type?.toLowerCase() === filters.fuel.toLowerCase());
    if (filters.minPrice) updated = updated.filter(car => Number(car.price?.replace('$', '')) >= filters.minPrice);
    if (filters.maxPrice) updated = updated.filter(car => Number(car.price?.replace('$', '')) <= filters.maxPrice);
    setFilteredCars(updated);
    setCurrentPage(1);
  }, [search, filters, cars]);

  const toggleWishlist = (car) => {
    if (wishlist.some(w => w.id === car.id)) {
      setWishlist(wishlist.filter(w => w.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  const paginatedCars = filteredCars.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <SearchBar search={search} setSearch={setSearch} />
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {paginatedCars.length > 0 ? (
          paginatedCars.map((car) => (
            <CarCard key={car.id} car={car} wishlist={wishlist} toggleWishlist={toggleWishlist} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 mt-6">
            <AiOutlineCar className="text-5xl text-gray-400 mx-auto" />
            <p className="text-lg font-medium">No cars found. Try adjusting your search and filters.</p>
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CarSearch;
