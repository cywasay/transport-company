// Comprehensive hotel data with diverse properties, locations, and amenities

export const hotelsData = [
  // United States - New York
  {
    id: 1,
    name: "Grand Plaza Hotel",
    country: "United States",
    city: "New York",
    rating: 5,
    pricePerNight: 250,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant"],
    maxGuests: 4,
    roomsAvailable: 15,
    acceptsCitizenship: ["United States", "United Kingdom", "Canada"]
  },
  {
    id: 2,
    name: "Times Square Luxury",
    country: "United States",
    city: "New York",
    rating: 5,
    pricePerNight: 380,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    amenities: ["WiFi", "Spa", "Fine Dining", "Concierge", "Rooftop Bar"],
    maxGuests: 4,
    roomsAvailable: 8,
    acceptsCitizenship: ["United States", "United Kingdom", "Canada", "Germany"]
  },
  {
    id: 3,
    name: "Manhattan Boutique Hotel",
    country: "United States",
    city: "New York",
    rating: 4,
    pricePerNight: 195,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    amenities: ["WiFi", "Breakfast", "Fitness Center", "Business Center"],
    maxGuests: 3,
    roomsAvailable: 22,
    acceptsCitizenship: ["United States", "United Kingdom", "Canada"]
  },
  
  // United States - Miami
  {
    id: 4,
    name: "Oceanview Resort",
    country: "United States",
    city: "Miami",
    rating: 4,
    pricePerNight: 180,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    amenities: ["WiFi", "Beach Access", "Pool", "Bar"],
    maxGuests: 6,
    roomsAvailable: 8,
    acceptsCitizenship: ["United States", "Mexico", "Brazil"]
  },
  {
    id: 5,
    name: "South Beach Paradise",
    country: "United States",
    city: "Miami",
    rating: 5,
    pricePerNight: 320,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    amenities: ["WiFi", "Beach Access", "Pool", "Spa", "Restaurant", "Nightclub"],
    maxGuests: 6,
    roomsAvailable: 5,
    acceptsCitizenship: ["United States", "Mexico", "Brazil", "Argentina"]
  },
  
  // United States - Chicago
  {
    id: 6,
    name: "City Center Budget Hotel",
    country: "United States",
    city: "Chicago",
    rating: 2,
    pricePerNight: 80,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    amenities: ["WiFi"],
    maxGuests: 2,
    roomsAvailable: 30,
    acceptsCitizenship: ["United States"]
  },
  {
    id: 7,
    name: "Magnificent Mile Hotel",
    country: "United States",
    city: "Chicago",
    rating: 4,
    pricePerNight: 220,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Fitness Center", "Restaurant", "Business Center"],
    maxGuests: 4,
    roomsAvailable: 12,
    acceptsCitizenship: ["United States", "Canada", "United Kingdom"]
  },
  
  // United States - Orlando
  {
    id: 8,
    name: "Family Friendly Resort",
    country: "United States",
    city: "Orlando",
    rating: 4,
    pricePerNight: 150,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    amenities: ["WiFi", "Pool", "Kids Club", "Restaurant"],
    maxGuests: 6,
    roomsAvailable: 25,
    acceptsCitizenship: ["United States", "Canada", "Mexico"]
  },
  {
    id: 9,
    name: "Theme Park Resort",
    country: "United States",
    city: "Orlando",
    rating: 4,
    pricePerNight: 280,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Pool", "Water Park", "Kids Club", "Shuttle Service"],
    maxGuests: 8,
    roomsAvailable: 18,
    acceptsCitizenship: ["United States", "Canada", "Mexico", "United Kingdom"]
  },
  
  // United States - San Francisco
  {
    id: 10,
    name: "Bay View Hotel",
    country: "United States",
    city: "San Francisco",
    rating: 4,
    pricePerNight: 270,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    amenities: ["WiFi", "Restaurant", "Fitness Center", "Business Center"],
    maxGuests: 4,
    roomsAvailable: 10,
    acceptsCitizenship: ["United States", "Canada", "United Kingdom"]
  },
  
  // United Kingdom - London
  {
    id: 11,
    name: "Downtown Inn",
    country: "United Kingdom",
    city: "London",
    rating: 3,
    pricePerNight: 120,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    amenities: ["WiFi", "Breakfast", "Parking"],
    maxGuests: 2,
    roomsAvailable: 20,
    acceptsCitizenship: ["United Kingdom", "Ireland", "France"]
  },
  {
    id: 12,
    name: "Royal Westminster Hotel",
    country: "United Kingdom",
    city: "London",
    rating: 5,
    pricePerNight: 350,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    amenities: ["WiFi", "Spa", "Fine Dining", "Concierge", "Historic Building"],
    maxGuests: 4,
    roomsAvailable: 6,
    acceptsCitizenship: ["United Kingdom", "Ireland", "France", "Germany", "United States"]
  },
  
  // United Kingdom - Manchester
  {
    id: 13,
    name: "Business Hotel",
    country: "United Kingdom",
    city: "Manchester",
    rating: 3,
    pricePerNight: 100,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    amenities: ["WiFi", "Business Center", "Breakfast", "Parking"],
    maxGuests: 2,
    roomsAvailable: 18,
    acceptsCitizenship: ["United Kingdom", "Ireland"]
  },
  {
    id: 14,
    name: "City Centre Hotel",
    country: "United Kingdom",
    city: "Manchester",
    rating: 4,
    pricePerNight: 135,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Breakfast", "Restaurant", "Fitness Center"],
    maxGuests: 3,
    roomsAvailable: 15,
    acceptsCitizenship: ["United Kingdom", "Ireland", "France"]
  },
  
  // United Kingdom - Edinburgh
  {
    id: 15,
    name: "Historic Castle View Hotel",
    country: "United Kingdom",
    city: "Edinburgh",
    rating: 4,
    pricePerNight: 165,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Breakfast", "Historic Building", "Restaurant"],
    maxGuests: 3,
    roomsAvailable: 12,
    acceptsCitizenship: ["United Kingdom", "Ireland", "France"]
  },
  
  // Canada - Toronto
  {
    id: 16,
    name: "Budget Stay Inn",
    country: "Canada",
    city: "Toronto",
    rating: 2,
    pricePerNight: 90,
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
    amenities: ["WiFi", "Parking"],
    maxGuests: 2,
    roomsAvailable: 35,
    acceptsCitizenship: ["Canada", "United States"]
  },
  {
    id: 17,
    name: "Downtown Toronto Hotel",
    country: "Canada",
    city: "Toronto",
    rating: 4,
    pricePerNight: 195,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Pool", "Fitness Center", "Restaurant"],
    maxGuests: 4,
    roomsAvailable: 14,
    acceptsCitizenship: ["Canada", "United States", "United Kingdom"]
  },
  
  // Canada - Vancouver
  {
    id: 18,
    name: "Mountain Lodge",
    country: "Canada",
    city: "Vancouver",
    rating: 4,
    pricePerNight: 200,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    amenities: ["WiFi", "Ski Access", "Restaurant", "Spa"],
    maxGuests: 5,
    roomsAvailable: 12,
    acceptsCitizenship: ["Canada", "United States", "United Kingdom"]
  },
  {
    id: 19,
    name: "Harbour View Hotel",
    country: "Canada",
    city: "Vancouver",
    rating: 4,
    pricePerNight: 225,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    amenities: ["WiFi", "Pool", "Restaurant", "Fitness Center"],
    maxGuests: 4,
    roomsAvailable: 9,
    acceptsCitizenship: ["Canada", "United States", "United Kingdom"]
  },
  
  // Canada - Montreal
  {
    id: 20,
    name: "Old Town Boutique",
    country: "Canada",
    city: "Montreal",
    rating: 4,
    pricePerNight: 175,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    amenities: ["WiFi", "Breakfast", "Historic Building", "Restaurant"],
    maxGuests: 3,
    roomsAvailable: 11,
    acceptsCitizenship: ["Canada", "United States", "France"]
  },
  
  // Australia - Sydney
  {
    id: 21,
    name: "Beachfront Paradise",
    country: "Australia",
    city: "Sydney",
    rating: 5,
    pricePerNight: 320,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    amenities: ["WiFi", "Beach Access", "Pool", "Spa", "Restaurant"],
    maxGuests: 8,
    roomsAvailable: 5,
    acceptsCitizenship: ["Australia", "New Zealand", "United Kingdom"]
  },
  {
    id: 22,
    name: "Harbour Bridge Hotel",
    country: "Australia",
    city: "Sydney",
    rating: 4,
    pricePerNight: 240,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Pool", "Restaurant", "Fitness Center"],
    maxGuests: 4,
    roomsAvailable: 13,
    acceptsCitizenship: ["Australia", "New Zealand", "United Kingdom", "United States"]
  },
  
  // Australia - Melbourne
  {
    id: 23,
    name: "City Art Hotel",
    country: "Australia",
    city: "Melbourne",
    rating: 4,
    pricePerNight: 210,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    amenities: ["WiFi", "Breakfast", "Art Gallery", "Restaurant"],
    maxGuests: 3,
    roomsAvailable: 16,
    acceptsCitizenship: ["Australia", "New Zealand", "United Kingdom"]
  },
  
  // France - Paris
  {
    id: 24,
    name: "Luxury Boutique Hotel",
    country: "France",
    city: "Paris",
    rating: 5,
    pricePerNight: 450,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    amenities: ["WiFi", "Spa", "Fine Dining", "Concierge"],
    maxGuests: 4,
    roomsAvailable: 3,
    acceptsCitizenship: ["France", "United Kingdom", "Germany", "United States"]
  },
  {
    id: 25,
    name: "Champs-Élysées Hotel",
    country: "France",
    city: "Paris",
    rating: 4,
    pricePerNight: 290,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    amenities: ["WiFi", "Breakfast", "Restaurant", "Fitness Center"],
    maxGuests: 3,
    roomsAvailable: 8,
    acceptsCitizenship: ["France", "United Kingdom", "Germany", "United States"]
  },
  
  // Italy - Rome
  {
    id: 26,
    name: "Historic Grand Hotel",
    country: "Italy",
    city: "Rome",
    rating: 5,
    pricePerNight: 380,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: ["WiFi", "Historic Building", "Restaurant", "Spa"],
    maxGuests: 4,
    roomsAvailable: 7,
    acceptsCitizenship: ["Italy", "France", "United Kingdom", "United States"]
  },
  
  // Spain - Barcelona
  {
    id: 27,
    name: "Seaside Resort",
    country: "Spain",
    city: "Barcelona",
    rating: 4,
    pricePerNight: 220,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    amenities: ["WiFi", "Beach Access", "Pool", "Restaurant"],
    maxGuests: 6,
    roomsAvailable: 10,
    acceptsCitizenship: ["Spain", "France", "United Kingdom", "Germany"]
  },
  {
    id: 28,
    name: "Gothic Quarter Hotel",
    country: "Spain",
    city: "Barcelona",
    rating: 4,
    pricePerNight: 185,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    amenities: ["WiFi", "Breakfast", "Historic Building", "Roof Terrace"],
    maxGuests: 3,
    roomsAvailable: 14,
    acceptsCitizenship: ["Spain", "France", "United Kingdom"]
  }
];

