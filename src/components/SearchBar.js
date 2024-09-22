// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

// Styled component for the input
const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
`;

const SearchBar = ({ onSearch }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;


