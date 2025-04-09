import React from "react";
import CarCard from "../Components/CarCard/CarCard";
import { AiOutlineHeart } from "react-icons/ai"; // Import heart icon

const Wishlist = ({ wishlist, setWishlist }) => {
  const toggleWishlist = (car) => {
    if (wishlist.some((w) => w.id === car.id)) {
      setWishlist(wishlist.filter((w) => w.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        ❤️ Your Wishlist
      </h2>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {wishlist.map((car) => (
            <CarCard key={car.id} car={car} wishlist={wishlist} toggleWishlist={toggleWishlist} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-6">
          <AiOutlineHeart className="text-5xl text-gray-400 mx-auto" />
          <p className="text-lg font-medium">Your wishlist is empty. Start adding your favorite cars! 🚗</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
