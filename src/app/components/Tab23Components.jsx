"use client";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTab23Store, setRange } from "./Tab23Store";

function formatDate(date) {
  if (!date) return null;
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Shared state for picker visibility
let pickerOpenState = { isOpen: false, setOpen: null };

export function Tab2AccommodationB({ onDateRangeSelect }) {
  const { range } = useTab23Store();
  const startDate = range && range[0] ? range[0] : null;
  const endDate = range && range[1] ? range[1] : null;
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    pickerOpenState.setOpen = setIsOpen;
    pickerOpenState.isOpen = isOpen;
  }, [isOpen]);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setRange(dates);
    onDateRangeSelect?.(start, end);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div 
      ref={containerRef}
      className="md:col-span-2 col-span-1 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer h-auto min-h-[36px] sm:h-9 md:h-11 relative flex items-center justify-center px-2 sm:px-3 md:px-4"
      data-date-picker-start
    >
      <div onClick={handleClick} className="w-full h-full flex items-center justify-center">
        <h3 className="font-medium text-gray-800 text-xs sm:text-sm">
          {startDate ? formatDate(startDate) : "Start Date"}
        </h3>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 sm:right-auto z-50 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 custom-datepicker-wrapper overflow-x-auto">
          <DatePicker
            ref={datePickerRef}
            selected={startDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            minDate={new Date()}
            className="custom-datepicker"
          />
        </div>
      )}
    </div>
  );
}

export function Tab3AccommodationC({ endDate, onDateRangeSelect }) {
  const { range } = useTab23Store();
  const startDate = range && range[0] ? range[0] : null;
  const endDateValue = range && range[1] ? range[1] : endDate;

  const handleClick = () => {
    // Trigger the click on the start date component to open the picker
    const startDateComponent = document.querySelector('[data-date-picker-start]');
    if (startDateComponent) {
      const clickableDiv = startDateComponent.querySelector('div');
      if (clickableDiv) {
        clickableDiv.click();
      } else {
        startDateComponent.click();
      }
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="md:col-span-2 col-span-1 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer h-auto min-h-[36px] sm:h-9 md:h-11 relative flex items-center justify-center px-2 sm:px-3 md:px-4"
    >
      <div className="w-full h-full flex items-center justify-center">
        <h3 className="font-medium text-gray-800 text-xs sm:text-sm">
          {endDateValue ? formatDate(endDateValue) : "End Date"}
        </h3>
      </div>
    </div>
  );
}
