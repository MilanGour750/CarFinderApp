import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="flex justify-center mt-8 gap-4 items-center">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
      className="px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md transition"
    >
      ⬅ Prev
    </button>
    <span className="px-5 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm font-medium">
      Page {currentPage} of {totalPages}
    </span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
      className="px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md transition"
    >
      Next ➡
    </button>
  </div>
);

export default Pagination;
