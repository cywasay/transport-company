'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import CabCard from '../components/CabCard';

// Separate component that uses useSearchParams
function SearchResultsContent() {
  const searchParams = useSearchParams();
  const [randomCabs, setRandomCabs] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  
  // Get the search parameters
  const country = searchParams.get('country');
  const city = searchParams.get('city');
  const query = searchParams.get('query');

  // Static cab data per country (added capacity and price)
  const cabData = {
    'United States': [
      { name: 'Yellow Cab NYC', desc: 'Classic New York yellow cab', image: '/cabs/nyc-yellow.jpg', capacity: 4, price: '$25' },
      { name: 'LA City Taxi', desc: 'Reliable cabs in Los Angeles', image: '/cabs/la-taxi.jpg', capacity: 4, price: '$30' },
      { name: 'Chicago Cab Co.', desc: 'Serving Chicago downtown', image: '/cabs/chicago-cab.jpg', capacity: 4, price: '$22' },
      { name: 'Miami Beach Taxi', desc: 'Cabs for Miami Beach', image: '/cabs/miami-cab.jpg', capacity: 4, price: '$28' },
      { name: 'San Francisco Taxi', desc: 'Bay Area rides', image: '/cabs/sf-cab.jpg', capacity: 4, price: '$32' }
    ],
    'United Kingdom': [
      { name: 'London Black Cab', desc: 'Iconic London taxi', image: '/cabs/london-black.jpg', capacity: 4, price: '£20' },
      { name: 'Manchester Taxi', desc: 'Serving Manchester', image: '/cabs/manchester-cab.jpg', capacity: 4, price: '£18' },
      { name: 'Edinburgh Cab', desc: 'Cabs in Edinburgh', image: '/cabs/edinburgh-cab.jpg', capacity: 4, price: '£22' },
      { name: 'Birmingham Taxi', desc: 'Birmingham city rides', image: '/cabs/birmingham-cab.jpg', capacity: 4, price: '£19' },
      { name: 'Liverpool Taxi', desc: 'Liverpool cabs', image: '/cabs/liverpool-cab.jpg', capacity: 4, price: '£17' }
    ],
    'Canada': [
      { name: 'Toronto Cab', desc: 'Toronto city cabs', image: '/cabs/toronto-cab.jpg', capacity: 4, price: '$24' },
      { name: 'Vancouver Taxi', desc: 'Vancouver rides', image: '/cabs/vancouver-cab.jpg', capacity: 4, price: '$26' },
      { name: 'Montreal Taxi', desc: 'Montreal cabs', image: '/cabs/montreal-cab.jpg', capacity: 4, price: '$23' },
      { name: 'Calgary Cab', desc: 'Cabs in Calgary', image: '/cabs/calgary-cab.jpg', capacity: 4, price: '$21' },
      { name: 'Ottawa Taxi', desc: 'Ottawa rides', image: '/cabs/ottawa-cab.jpg', capacity: 4, price: '$20' }
    ],
    'Australia': [
      { name: 'Sydney Taxi', desc: 'Sydney city cabs', image: '/cabs/sydney-cab.jpg', capacity: 4, price: '$35' },
      { name: 'Melbourne Cab', desc: 'Melbourne rides', image: '/cabs/melbourne-cab.jpg', capacity: 4, price: '$33' },
      { name: 'Brisbane Taxi', desc: 'Brisbane cabs', image: '/cabs/brisbane-cab.jpg', capacity: 4, price: '$30' },
      { name: 'Perth Cab', desc: 'Cabs in Perth', image: '/cabs/perth-cab.jpg', capacity: 4, price: '$29' },
      { name: 'Adelaide Taxi', desc: 'Adelaide rides', image: '/cabs/adelaide-cab.jpg', capacity: 4, price: '$27' }
    ]
  };

  // Get up to 6 random cabs for the selected country
  function getRandomCabs(selectedCountry) {
    if (!selectedCountry) return [];
    const cabs = cabData[selectedCountry] || [];
    if (cabs.length <= 6) return cabs;
    // Shuffle and pick 6
    const shuffled = [...cabs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }

  // Only randomize on the client side
  useEffect(() => {
    setIsClient(true);
    if (country) {
      setRandomCabs(getRandomCabs(country));
    } else {
      setRandomCabs([]);
    }
  }, [country]);

  return (
    <div className="min-h-screen container mx-auto p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Showing transfers</h1>
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
        >
          {isGridView ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <span>List View</span>
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Grid View</span>
            </>
          )}
        </button>
      </div>

      {/* Display current search filters */}
      <div className="w-full max-w-3xl mx-auto mb-6">
        <div className="bg-white p-4 text-gray-900 rounded-lg flex items-center justify-center space-x-8 shadow-md">
          <div className="flex items-center">
            <span className="font-medium mr-2">Country:</span>
            <span>{country}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">City:</span>
            <span>{city}</span>
          </div>
          {query && (
            <div className="flex items-center">
              <span className="font-medium mr-2">Search Query:</span>
              <span>{query}</span>
            </div>
          )}
        </div>
      </div>

      {/* Centered results area */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className={`w-full max-w-3xl ${isGridView ? 'grid grid-cols-3 grid-rows-2 gap-6' : 'space-y-6'}`}>
          {!isClient ? (
            // Loading state during hydration
            <div className="text-center text-gray-500">Loading cabs...</div>
          ) : randomCabs.length > 0 ? (
            randomCabs.map((cab, idx) => (
              <CabCard key={idx} cab={cab} isGridView={isGridView} />
            ))
          ) : (
            <div className="text-center text-gray-500">No cabs found for this country.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main component wrapped with Suspense
const SearchResults = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500">Loading search results...</div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
};

export default SearchResults;