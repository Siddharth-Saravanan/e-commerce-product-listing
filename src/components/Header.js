// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

// Styled header container
const HeaderContainer = styled.div`
  background-color: #232f3e;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  justify-content: space-between;
`;

// Styled component for the site logo
const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

// Wrapper for centering search form
const SearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* Adds space between header and search bar */
`;

// Styled component for the search form
const SearchForm = styled.form`
  display: flex;
  width: 50%;
  max-width: 600px;
  gap: 10px; /* Adds a small gap between search input and button */
`;

// Styled input for the search bar
const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

// Styled button for search
const SearchButton = styled.button`
  height: 40px;
  width: 100px; /* Makes the button width fixed and proportional */
  padding: 10px;
  font-size: 16px;
  background-color: #febd69;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f3a847;
  }
`;

const Header = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    onSearch(searchTerm);
  };

  return (
    <HeaderContainer>
      <Logo>Siddharth.com</Logo>
      <SearchWrapper>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput type="text" name="search" placeholder="Search products..." />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </SearchWrapper>
    </HeaderContainer>
  );
};

export default Header;
