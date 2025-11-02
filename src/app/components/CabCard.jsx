'use client';
import React from 'react';

const CabCard = ({ cab, isGridView }) => {
  const { name, desc, image, capacity = 4, price = '$20' } = cab;

  if (isGridView) {
    return (
      <div className="w-full bg-white rounded-xl shadow-md p-4 flex flex-col">
        <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-3">
          <img src={image} alt={name} className="object-cover w-full h-full" onError={e => (e.target.style.display = 'none')} />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-600 text-sm mb-3">{desc}</p>

          <div className="mt-auto space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">
                <span className="font-medium">Capacity:</span> {capacity} pax
              </span>
              <span className="text-gray-900 font-semibold">{price}</span>
            </div>

            <button className="w-full bg-yellow-200 hover:bg-yellow-300 text-black font-semibold rounded px-4 py-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
      <div className="w-full sm:w-20 h-32 sm:h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
        <img src={image} alt={name} className="object-cover w-full h-full" onError={e => (e.target.style.display = 'none')} />
      </div>

      <div className="flex-1 w-full sm:w-auto">
        <h3 className="text-base sm:text-lg font-bold">{name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">{desc}</p>

        <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <div className="text-xs sm:text-sm text-gray-700">
            <span className="font-medium">Capacity:</span> {capacity} pax
          </div>

          <div className="text-sm sm:text-base text-gray-900 font-semibold">{price}</div>
        </div>
      </div>

      <div className="w-full sm:w-auto shrink-0">
        <button className="w-full sm:w-auto bg-yellow-200 hover:bg-yellow-300 text-black font-semibold rounded px-4 py-2 text-sm sm:text-base">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CabCard;