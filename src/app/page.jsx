"use client";
import { useState } from "react";
import { SelectPicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

import SearchBar from "./components/SearchBar";
import {
  Tab1Search,
  Tab2AccommodationB,
  Tab3AccommodationC,
  Tab4SmallD,
  Tab5SmallE,
} from "./components/TabComponents";
import {
  useTab23Store,
  setRating,
  setGuestsCitizenship,
  clearAllFilters,
} from "./components/Tab23Store";
import HotelResults from "./components/HotelResults";
import DayTourResults from "./components/DayTourResults";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const state = useTab23Store();
  const { rating, guestsCitizenship, country, rooms, range } = state;
  const [showResults, setShowResults] = useState(false);
  const [showTourResults, setShowTourResults] = useState(false);

  const handleDateRangeSelect = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleCitizenshipChange = (value) => {
    setGuestsCitizenship(value || null);
  };

  const handleTourSearch = () => {
    setShowTourResults(true);
  };

  const handleClearAccommodationFilters = () => {
    clearAllFilters();
    setStartDate(null);
    setEndDate(null);
    setShowResults(false);
  };

  const hasActiveAccommodationFilters =
    country ||
    rating > 0 ||
    guestsCitizenship ||
    (range && range[0] && range[1]) ||
    (rooms && rooms.some((r) => r.adults > 2 || r.children.length > 0));

  return (
    <main className="min-h-screen">
      <div className="container mx-auto p-2 sm:p-4 lg:p-6 max-w-6xl mt-16 sm:mt-20 md:mt-24">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
          <button
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm md:text-base transition-all ${
              activeTab === "tab1"
                ? "bg-yellow-300 text-black shadow-lg"
                : "bg-yellow-200 text-gray-600 hover:bg-gray-100 hover:text-black shadow-md border border-gray-200"
            }`}
            onClick={() => {
              setActiveTab("tab1");
              setShowResults(false);
              setShowTourResults(false);
            }}
          >
            Day Tours
          </button>
          <button
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm md:text-base transition-all ${
              activeTab === "tab2"
                ? "bg-yellow-300 text-black shadow-lg"
                : "bg-yellow-200 text-gray-600 hover:bg-gray-100 hover:text-black shadow-md border border-gray-200"
            }`}
            onClick={() => {
              setActiveTab("tab2");
              setShowResults(false);
              setShowTourResults(false);
            }}
          >
            Accommodations
          </button>
          <button
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm md:text-base transition-all ${
              activeTab === "tab3"
                ? "bg-yellow-300 text-black shadow-lg"
                : "bg-yellow-200 text-gray-600 hover:bg-gray-100 hover:text-black shadow-md border border-gray-200"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Tab 3
          </button>
        </div>

        {/* Tab content */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          {activeTab === "tab1" && (
            <>
              <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6">
                <SearchBar onSearch={handleTourSearch} />
              </div>
              {showTourResults && <DayTourResults />}
            </>
          )}

          {activeTab === "tab2" && (
            <>
              <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6">
                <div className="flex justify-end mb-3 sm:mb-4">
                  {hasActiveAccommodationFilters && (
                    <button
                      onClick={handleClearAccommodationFilters}
                      className="text-xs sm:text-sm text-gray-600 hover:text-red-600 underline transition-colors"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
                {/* 5-tab row: md:grid-cols-8 so we can have three wide tabs (col-span-2) and two narrow tabs (col-span-1) */}
                <div className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 items-stretch">
                    <Tab1Search />
                    <Tab2AccommodationB
                      onDateRangeSelect={handleDateRangeSelect}
                      startDate={startDate}
                    />
                    <Tab3AccommodationC
                      endDate={endDate}
                      onDateRangeSelect={handleDateRangeSelect}
                    />
                    <Tab4SmallD />
                    <Tab5SmallE onSearch={handleSearch} />

                    {/* Guest Citizenship Picker */}
                    <div className="md:col-span-2 col-span-1 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors h-auto min-h-[36px] sm:h-9 md:h-11 relative flex items-center justify-center">
                      <SelectPicker
                        searchable
                        placeholder="Guests Citizenship"
                        value={guestsCitizenship}
                        onChange={handleCitizenshipChange}
                        size="md"
                        block
                        cleanable
                        data={[
                          "Afghanistan",
                          "Albania",
                          "Algeria",
                          "Andorra",
                          "Angola",
                          "Antigua and Barbuda",
                          "Argentina",
                          "Armenia",
                          "Australia",
                          "Austria",
                          "Azerbaijan",
                          "Bahamas",
                          "Bahrain",
                          "Bangladesh",
                          "Barbados",
                          "Belarus",
                          "Belgium",
                          "Belize",
                          "Benin",
                          "Bhutan",
                          "Bolivia",
                          "Bosnia and Herzegovina",
                          "Botswana",
                          "Brazil",
                          "Brunei",
                          "Bulgaria",
                          "Burkina Faso",
                          "Burundi",
                          "Cabo Verde",
                          "Cambodia",
                          "Cameroon",
                          "Canada",
                          "Central African Republic",
                          "Chad",
                          "Chile",
                          "China",
                          "Colombia",
                          "Comoros",
                          "Congo",
                          "Costa Rica",
                          "Croatia",
                          "Cuba",
                          "Cyprus",
                          "Czech Republic",
                          "Denmark",
                          "Djibouti",
                          "Dominica",
                          "Dominican Republic",
                          "Ecuador",
                          "Egypt",
                          "El Salvador",
                          "Equatorial Guinea",
                          "Eritrea",
                          "Estonia",
                          "Eswatini",
                          "Ethiopia",
                          "Fiji",
                          "Finland",
                          "France",
                          "Gabon",
                          "Gambia",
                          "Georgia",
                          "Germany",
                          "Ghana",
                          "Greece",
                          "Grenada",
                          "Guatemala",
                          "Guinea",
                          "Guinea-Bissau",
                          "Guyana",
                          "Haiti",
                          "Honduras",
                          "Hungary",
                          "Iceland",
                          "India",
                          "Indonesia",
                          "Iran",
                          "Iraq",
                          "Ireland",
                          "Israel",
                          "Italy",
                          "Jamaica",
                          "Japan",
                          "Jordan",
                          "Kazakhstan",
                          "Kenya",
                          "Kiribati",
                          "Kosovo",
                          "Kuwait",
                          "Kyrgyzstan",
                          "Laos",
                          "Latvia",
                          "Lebanon",
                          "Lesotho",
                          "Liberia",
                          "Libya",
                          "Liechtenstein",
                          "Lithuania",
                          "Luxembourg",
                          "Madagascar",
                          "Malawi",
                          "Malaysia",
                          "Maldives",
                          "Mali",
                          "Malta",
                          "Marshall Islands",
                          "Mauritania",
                          "Mauritius",
                          "Mexico",
                          "Micronesia",
                          "Moldova",
                          "Monaco",
                          "Mongolia",
                          "Montenegro",
                          "Morocco",
                          "Mozambique",
                          "Myanmar",
                          "Namibia",
                          "Nauru",
                          "Nepal",
                          "Netherlands",
                          "New Zealand",
                          "Nicaragua",
                          "Niger",
                          "Nigeria",
                          "North Korea",
                          "North Macedonia",
                          "Norway",
                          "Oman",
                          "Pakistan",
                          "Palau",
                          "Palestine",
                          "Panama",
                          "Papua New Guinea",
                          "Paraguay",
                          "Peru",
                          "Philippines",
                          "Poland",
                          "Portugal",
                          "Qatar",
                          "Romania",
                          "Russia",
                          "Rwanda",
                          "Saint Kitts and Nevis",
                          "Saint Lucia",
                          "Saint Vincent and the Grenadines",
                          "Samoa",
                          "San Marino",
                          "Sao Tome and Principe",
                          "Saudi Arabia",
                          "Senegal",
                          "Serbia",
                          "Seychelles",
                          "Sierra Leone",
                          "Singapore",
                          "Slovakia",
                          "Slovenia",
                          "Solomon Islands",
                          "Somalia",
                          "South Africa",
                          "South Korea",
                          "South Sudan",
                          "Spain",
                          "Sri Lanka",
                          "Sudan",
                          "Suriname",
                          "Sweden",
                          "Switzerland",
                          "Syria",
                          "Taiwan",
                          "Tajikistan",
                          "Tanzania",
                          "Thailand",
                          "Timor-Leste",
                          "Togo",
                          "Tonga",
                          "Trinidad and Tobago",
                          "Tunisia",
                          "Turkey",
                          "Turkmenistan",
                          "Tuvalu",
                          "Uganda",
                          "Ukraine",
                          "United Arab Emirates",
                          "United Kingdom",
                          "United States",
                          "Uruguay",
                          "Uzbekistan",
                          "Vanuatu",
                          "Vatican City",
                          "Venezuela",
                          "Vietnam",
                          "Yemen",
                          "Zambia",
                          "Zimbabwe",
                        ].map((country) => ({
                          label: country,
                          value: country,
                        }))}
                        menuStyle={{ zIndex: 1000 }}
                        placement="autoVerticalStart"
                      />
                    </div>

                    <div className="col-span-1 sm:col-span-2 lg:col-span-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors h-auto min-h-[36px] sm:h-9 md:h-11">
                      {/* Star Rating System */}
                      <div className="flex h-full items-center">
                        <div className="flex w-full h-full border-0 rounded overflow-hidden">
                          <button
                            onClick={() => setRating(0)}
                            className={`flex-1 h-full px-2 sm:px-3 font-medium transition-colors border-r border-gray-200 text-xs sm:text-sm ${
                              rating === 0
                                ? "bg-gray-100 text-gray-900"
                                : "bg-transparent text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            All
                          </button>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setRating(star)}
                              className={`flex-1 h-full px-1 sm:px-2 md:px-3 font-medium transition-colors text-xs sm:text-sm ${
                                star !== 5 ? "border-r border-gray-200" : ""
                              } ${
                                rating === star
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-transparent text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {star}★
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {showResults && <HotelResults />}
            </>
          )}

          {activeTab === "tab3" && (
            <div className="text-center p-12 bg-white rounded-lg shadow-lg">
              <div className="text-gray-400 text-lg font-medium">
                Coming soon (non-functional)
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}