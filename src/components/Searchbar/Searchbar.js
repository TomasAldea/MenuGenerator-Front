import React from "react";
import "./Searchbar.css"

export const SearchBar = ({ query, onChange }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      value={query}
      onChange={onChange}
    />
  );
};
