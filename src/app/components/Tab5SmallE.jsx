"use client";

export function Tab5SmallE({ onSearch }) {
  return (
    <button
      type="button"
      onClick={onSearch}
      className="md:col-span-1 col-span-1 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer h-auto min-h-[36px] sm:h-9 md:h-11 flex items-center justify-center px-2 sm:px-3 md:px-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label="Search"
    >
      <div>
        <h4 className="font-medium text-gray-800 text-xs sm:text-sm">Search</h4>
      </div>
    </button>
  );
}
