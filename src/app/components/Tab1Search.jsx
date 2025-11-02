"use client";
import { useState } from "react";
import { useTab23Store, setCountry } from "./Tab23Store";

export function Tab1Search() {
  const { country } = useTab23Store();
  const [query, setQuery] = useState(country || "");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina",
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
    "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala",
    "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Lucia", "Samoa", "San Marino",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setCountry(value); // Save to store

    if (!value.trim()) {
      setFilteredCountries([]);
      return;
    }

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered.slice(0, 10));
  };

  const handleCountrySelect = (selectedCountry) => {
    setQuery(selectedCountry);
    setCountry(selectedCountry); // Save to store
    setFilteredCountries([]);
  };

  return (
    <div className="md:col-span-2 col-span-1 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors h-auto min-h-[36px] sm:h-9 md:h-11 relative">
      <div className="w-full h-full flex items-center justify-center px-2 sm:px-3 md:px-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search countries..."
            className="w-full pl-6 sm:pl-7 pr-2 text-xs sm:text-sm border-none bg-transparent focus:outline-none placeholder:text-gray-500 text-gray-800 font-medium"
            value={query}
            onChange={handleSearch}
          />
          <svg
            className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {filteredCountries.length > 0 && (
            <ul className="absolute z-50 top-full mt-1 left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {filteredCountries.map((country, index) => (
                <li
                  key={index}
                  className="p-2 text-xs sm:text-sm text-left hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
