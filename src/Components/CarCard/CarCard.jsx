import React from "react";

const CarCard = ({ car, wishlist, toggleWishlist }) => {
  const isWishlisted = wishlist.some(w => w.id === car.id);

  return (
    <div className="border rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 p-5 flex flex-col bg-white">
      <img
        src="https://via.placeholder.com/300x200.png?text=Car+Image"
        alt={car.car}
        className="h-44 object-cover mb-4 rounded-md hover:scale-105 transition duration-300"
      />
      <h2 className="text-xl font-bold text-gray-800">{car.car} ({car.car_model_year})</h2>
      <p className="text-sm text-gray-600">Color: {car.car_color} | Price: {car.price}</p>
      <button
        onClick={() => toggleWishlist(car)}
        className={`mt-auto py-2 px-5 rounded-lg font-semibold transition duration-300 text-white ${
          isWishlisted ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default CarCard;
