"use client";

/**
 * Reusable card component for displaying hotel information
 */
export default function HotelCard({ hotel, isGridView = false }) {
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
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.backgroundColor = "#e5e7eb";
          }}
        />
      </div>
      <div className="flex-1 p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 pr-2">{hotel.name}</h3>
          <div className="flex items-center shrink-0">
            {[...Array(hotel.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm sm:text-lg">★</span>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
          {hotel.city}, {hotel.country}
        </p>
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {hotel.amenities.slice(0, 4).map((amenity, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {amenity}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              ${hotel.pricePerNight}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">per night</p>
            <p className="text-xs text-gray-400 mt-1">
              Max {hotel.maxGuests} guests • {hotel.roomsAvailable} rooms available
            </p>
          </div>
          <button className="w-full sm:w-auto bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 rounded-md transition-colors text-sm sm:text-base">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

