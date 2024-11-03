import React from 'react';
import '../Styles/home.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search recipes..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
