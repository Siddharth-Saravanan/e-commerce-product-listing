// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Header from './components/Header'; // Import Header

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />  {/* Use the new Header component */}
      <ProductList searchQuery={searchQuery} />
    </div>
  );
}

export default App;


