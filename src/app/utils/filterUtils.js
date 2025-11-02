// Utility functions for filtering data

export const filterCars = (cars, filters) => {
  const { country, city, searchQuery } = filters;
  
  return cars.filter((car) => {
    // Filter by country
    if (country && car.country.toLowerCase() !== country.toLowerCase()) {
      return false;
    }

    // Filter by city
    if (city && car.city.toLowerCase() !== city.toLowerCase()) {
      return false;
    }

    // Filter by search query (searches in name, vehicleType, and features)
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const searchableText = `${car.name} ${car.vehicleType} ${car.features.join(' ')}`.toLowerCase();
      if (!searchableText.includes(query)) {
        return false;
      }
    }

    return true;
  });
};

export const filterHotels = (hotels, filters) => {
  const { country, rating, guestsCitizenship, rooms, range } = filters;
  
  // Calculate total guests needed
  const totalGuests = rooms.reduce((sum, room) => {
    return sum + room.adults + room.children.length;
  }, 0);

  return hotels.filter((hotel) => {
    // Filter by country
    if (country && hotel.country.toLowerCase() !== country.toLowerCase()) {
      return false;
    }

    // Filter by star rating
    if (rating > 0 && hotel.rating !== rating) {
      return false;
    }

    // Filter by citizenship (if specified)
    if (guestsCitizenship && !hotel.acceptsCitizenship.includes(guestsCitizenship)) {
      return false;
    }

    // Filter by guest capacity
    if (totalGuests > hotel.maxGuests) {
      return false;
    }

    // Filter by availability (if date range is selected)
    if (range && range[0] && range[1]) {
      // Simulate availability check based on rooms available
      // In a real app, you'd check actual booking data
      if (hotel.roomsAvailable === 0) {
        return false;
      }
    }

    return true;
  });
};

