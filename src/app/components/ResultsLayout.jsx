"use client";
import { useState } from "react";

/**
 * Reusable layout component for displaying search results
 * Handles view toggle and filter display
 * Accepts children as a function that receives isGridView parameter
 */
export default function ResultsLayout({ 
  title, 
  count, 
  filters, 
  children,
  emptyMessage = "No results found matching your criteria.",
  emptySubMessage = "Try adjusting your filters."
}) {
  const [isGridView, setIsGridView] = useState(false);
  
  // Check if children is a function (render prop pattern)
  const renderChildren = () => {
    if (typeof children === 'function') {
      return children(isGridView);
    }
    return children;
  };

  return (
    <div className="mt-4 sm:mt-6 md:mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          {title} ({count})
        </h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => setIsGridView(false)}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md transition-colors text-xs sm:text-sm ${
              !isGridView
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setIsGridView(true)}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md transition-colors text-xs sm:text-sm ${
              isGridView
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* Display search filters */}
      {filters && filters.length > 0 && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
            {filters.map((filter, index) => (
              <span 
                key={index}
                className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {count === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-base sm:text-lg">{emptyMessage}</p>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">{emptySubMessage}</p>
        </div>
      ) : (
        <div
          className={
            isGridView
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              : "space-y-4 sm:space-y-6"
          }
        >
          {renderChildren()}
        </div>
      )}
    </div>
  );
}

