"use client";
import { useTab23Store } from "./Tab23Store";
import { hotelsData } from "../data/hotelsData";
import { filterHotels } from "../utils/filterUtils";
import ResultsLayout from "./ResultsLayout";
import HotelCard from "./HotelCard";

/**
 * Component for displaying filtered hotel results
 */
export default function HotelResults() {
  const { country, rating, guestsCitizenship, rooms, range } = useTab23Store();

  // Filter hotels based on search criteria
  const filteredHotels = filterHotels(hotelsData, {
    country,
    rating,
    guestsCitizenship,
    rooms,
    range
  });

  // Build filter display array
  const activeFilters = [];
  if (country) activeFilters.push(`Country: ${country}`);
  if (rating > 0) activeFilters.push(`Rating: ${rating} star${rating > 1 ? 's' : ''}`);
  if (guestsCitizenship) activeFilters.push(`Citizenship: ${guestsCitizenship}`);
  
  const totalGuests = rooms.reduce((sum, room) => sum + room.adults + room.children.length, 0);
  if (totalGuests > 0) activeFilters.push(`Guests: ${totalGuests}`);
  
  if (range && range[0] && range[1]) {
    activeFilters.push(`Dates: ${range[0].toLocaleDateString()} - ${range[1].toLocaleDateString()}`);
  }

  return (
    <ResultsLayout
      title="Available Hotels"
      count={filteredHotels.length}
      filters={activeFilters}
      emptyMessage="No hotels found matching your criteria."
      emptySubMessage="Try adjusting your filters."
    >
      {(isGridView) => filteredHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} isGridView={isGridView} />
      ))}
    </ResultsLayout>
  );
}
