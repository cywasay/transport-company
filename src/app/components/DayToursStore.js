import { useSyncExternalStore } from "react";

let state = { 
  country: "",
  city: "",
  searchQuery: ""
};

const listeners = new Set();

export function getState() {
  return state;
}

export function setCountry(country) {
  state = { ...state, country };
  listeners.forEach((l) => l());
}

export function setCity(city) {
  state = { ...state, city };
  listeners.forEach((l) => l());
}

export function setSearchQuery(query) {
  state = { ...state, searchQuery: query };
  listeners.forEach((l) => l());
}

export function clearAllFilters() {
  state = { 
    country: "",
    city: "",
    searchQuery: ""
  };
  listeners.forEach((l) => l());
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useDayToursStore() {
  return useSyncExternalStore(subscribe, getState, getState);
}

