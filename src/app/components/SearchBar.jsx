'use client';
import { useState, useEffect } from 'react';
import { useDayToursStore, setCountry, setCity, setSearchQuery, clearAllFilters } from './DayToursStore';
import CustomSelect from './CustomSelect';

const SearchBar = ({ onSearch }) => {
  const { country: storeCountry, city: storeCity, searchQuery: storeQuery } = useDayToursStore();
  const [selectedCountry, setSelectedCountry] = useState(storeCountry || '');
  const [searchText, setSearchText] = useState(storeQuery || '');

  // Sample data - you can replace with your actual country-city data
  const countryData = {
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco', 'Las Vegas'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Liverpool', 'Bath'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Quebec City'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast']
  };

  const [cities, setCities] = useState(countryData[selectedCountry] || []);
  const [selectedCity, setSelectedCity] = useState(storeCity || '');

  // Sync with store changes
  useEffect(() => {
    setSelectedCountry(storeCountry || '');
    setSelectedCity(storeCity || '');
    setSearchText(storeQuery || '');
    if (storeCountry) {
      setCities(countryData[storeCountry] || []);
    } else {
      setCities([]);
      setSelectedCity(''); // Clear city when country is cleared
    }
  }, [storeCountry, storeCity, storeQuery]);

  // Update cities when country changes
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setCountry(country); // Save to store
    setCities(countryData[country] || []);
    setSelectedCity(''); // Reset city when country changes
    setCity(''); // Clear city in store
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setCity(city); // Save to store
  };

  const handleSearchTextChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    setSearchQuery(query); // Save to store
  };

  const handleSearch = () => {
    if (selectedCountry && selectedCity) {
      // Trigger search callback if provided, otherwise use default navigation
      if (onSearch) {
        onSearch();
      } else {
        // Fallback to old behavior
        const params = new URLSearchParams({
          country: selectedCountry,
          city: selectedCity,
          query: searchText
        });
        window.location.href = `/search-results?${params.toString()}`;
      }
    }
  };

  const handleClearFilters = () => {
    clearAllFilters();
    setSelectedCountry('');
    setSelectedCity('');
    setSearchText('');
    setCities([]);
  };

  const hasActiveFilters = selectedCountry || selectedCity || searchText;

  return (
    <div className="w-full max-w-6xl mx-auto p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
      <div className="flex justify-end mb-2">
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="text-xs sm:text-sm text-gray-600 hover:text-red-600 underline transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-end">
        {/* Country Selection */}
        <div className="flex flex-col w-full sm:w-auto sm:flex-1 md:w-1/6">
          <CustomSelect
            value={selectedCountry}
            onChange={(value) => {
              handleCountryChange({ target: { value } });
            }}
            options={[
              { value: '', label: 'Select country' },
              ...Object.keys(countryData).map((country) => ({
                value: country,
                label: country,
              })),
            ]}
            placeholder="Select country"
          />
        </div>

        {/* City Selection */}
        <div className="flex flex-col w-full sm:w-auto sm:flex-1 md:w-1/6">
          <CustomSelect
            value={selectedCity}
            onChange={(value) => {
              handleCityChange({ target: { value } });
            }}
            options={[
              { value: '', label: 'Select city' },
              ...cities.map((city) => ({
                value: city,
                label: city,
              })),
            ]}
            placeholder="Select city"
            disabled={!selectedCountry}
          />
        </div>

        {/* Search Input - Takes more space */}
        <div className="flex flex-col w-full sm:flex-1 md:flex-1">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            className="w-full p-2.5 sm:p-3 md:p-3.5 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white hover:border-green-400 hover:shadow-md shadow-sm text-gray-800 placeholder-gray-400 text-xs sm:text-sm font-medium"
            placeholder="Search for tours..."
          />
        </div>

        {/* Search Button - Smaller */}
        <button
          onClick={handleSearch}
          disabled={!selectedCountry || !selectedCity}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 md:py-3 bg-yellow-300 text-gray-800 font-semibold rounded-lg sm:rounded-xl hover:bg-yellow-400 hover:shadow-md transition-all duration-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none transform hover:scale-105 active:scale-95 text-sm sm:text-base"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;