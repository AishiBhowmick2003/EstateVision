// src/components/SearchBar.jsx
import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchLocation, setSearchLocation, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        placeholder="Enter a city (e.g., New York)"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
