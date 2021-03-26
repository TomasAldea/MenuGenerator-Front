
import React from "react";

export const SearchBar = ({ query, onChange }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder="Search. .."
      value={query}
      onChange={onChange}
    />
  );
};
