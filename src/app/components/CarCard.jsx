"use client";

/**
 * Reusable card component for displaying car information
 */
export default function CarCard({ car, isGridView = false }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl ${
        isGridView ? "" : "flex flex-col sm:flex-row"
      }`}
    >
      <div
        className={`${
          isGridView ? "w-full h-40 sm:h-48" : "w-full sm:w-48 md:w-64 h-40 sm:h-48 shrink-0"
        } bg-gray-200 overflow-hidden`}
      >
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.backgroundColor = "#e5e7eb";
          }}
        />
      </div>
      <div className="flex-1 p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                {car.vehicleType}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">{car.name}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
          {car.city}, {car.country}
        </p>
        <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
          {car.features.slice(0, 4).map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
          <span className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {car.capacity} passengers
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {car.transmission}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              ${car.price}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">per day</p>
          </div>
          <button className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 rounded-md transition-colors text-sm sm:text-base">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

