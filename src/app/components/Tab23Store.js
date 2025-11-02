import { useSyncExternalStore } from "react";

let state = { 
  range: null,
  country: "",
  guestsCitizenship: null,
  rating: 0,
  rooms: [{ id: 1, adults: 2, children: [] }]
};

const listeners = new Set();

export function getState() {
  return state;
}

export function setRange(newRange) {
  state = { ...state, range: newRange };
  listeners.forEach((l) => l());
}

export function setCountry(country) {
  state = { ...state, country };
  listeners.forEach((l) => l());
}

export function setGuestsCitizenship(citizenship) {
  state = { ...state, guestsCitizenship: citizenship };
  listeners.forEach((l) => l());
}

export function setRating(rating) {
  state = { ...state, rating };
  listeners.forEach((l) => l());
}

export function setRooms(rooms) {
  state = { ...state, rooms };
  listeners.forEach((l) => l());
}

export function clearAllFilters() {
  state = { 
    range: null,
    country: "",
    guestsCitizenship: null,
    rating: 0,
    rooms: [{ id: 1, adults: 2, children: [] }]
  };
  listeners.forEach((l) => l());
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useTab23Store() {
  return useSyncExternalStore(subscribe, getState, getState);
}
