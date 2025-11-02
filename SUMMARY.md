# Project Summary

## Project Name
Airport (Next.js Application)

## Overview
This project is a web application built with Next.js, designed to provide users with information and booking options for cabs, cars, hotels, and day tours. The application features a modern UI and leverages reusable React components for a seamless user experience.

## Key Features
- Search and filter for cabs, cars, hotels, and day tours
- Modular component structure for easy maintenance
- Data-driven UI with mock data for cars and hotels
- Responsive design with global and component-specific styles

## Main Directories & Files
- `src/app/` - Main application directory
  - `components/` - Reusable UI components (e.g., CabCard, CarCard, HotelCard, SearchBar)
  - `data/` - Mock data for cars and hotels
  - `search-results/` - Search results page
  - `utils/` - Utility functions (e.g., filtering logic)
  - `globals.css` - Global styles
  - `layout.jsx` - Application layout
  - `page.jsx` - Main landing page
- `public/` - Static assets
- `package.json` - Project dependencies and scripts
- `next.config.mjs` - Next.js configuration
- `jsconfig.json` - JavaScript project configuration

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```

## Author
- [Your Name Here]

## Last Updated
November 1, 2025
 
## Project File Structure

```
airport/
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── SUMMARY.md
├── public/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.jsx
│       ├── page.jsx
│       ├── components/
│       │   ├── CabCard.jsx
│       │   ├── CarCard.jsx
│       │   ├── CustomSelect.jsx
│       │   ├── DayTourResults.jsx
│       │   ├── DayToursStore.js
│       │   ├── Header.jsx
│       │   ├── HotelCard.jsx
│       │   ├── HotelResults.jsx
│       │   ├── ResultsLayout.jsx
│       │   ├── SearchBar.jsx
│       │   ├── Tab1Search.jsx
│       │   ├── Tab23Components.jsx
│       │   ├── Tab23Store.js
│       │   ├── Tab4SmallD.jsx
│       │   ├── Tab5SmallE.jsx
│       │   └── TabComponents.jsx
│       ├── data/
│       │   ├── carsData.js
│       │   └── hotelsData.js
│       ├── search-results/
│       │   └── page.jsx
│       └── utils/
│           └── filterUtils.js
```
    