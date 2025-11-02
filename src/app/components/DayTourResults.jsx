"use client";
import { useDayToursStore } from "./DayToursStore";
import { carsData } from "../data/carsData";
import { filterCars } from "../utils/filterUtils";
import ResultsLayout from "./ResultsLayout";
import CarCard from "./CarCard";

/**
 * Component for displaying filtered day tour (car) results
 */
export default function DayTourResults() {
  const { country, city, searchQuery } = useDayToursStore();

  // Filter cars based on search criteria
  const filteredCars = filterCars(carsData, { country, city, searchQuery });

  // Build filter display array
  const activeFilters = [];
  if (country) activeFilters.push(`Country: ${country}`);
  if (city) activeFilters.push(`City: ${city}`);
  if (searchQuery) activeFilters.push(`Search: ${searchQuery}`);

  return (
    <ResultsLayout
      title="Available Vehicles"
      count={filteredCars.length}
      filters={activeFilters}
      emptyMessage="No vehicles found matching your criteria."
      emptySubMessage="Try adjusting your search filters."
    >
      {(isGridView) => filteredCars.map((car) => (
        <CarCard key={car.id} car={car} isGridView={isGridView} />
      ))}
    </ResultsLayout>
  );
}
