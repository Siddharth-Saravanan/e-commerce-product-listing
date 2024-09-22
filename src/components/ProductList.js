// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled component for product grid
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto; /* Center the grid */
`;

// Styled component for individual product card
const ProductCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 250px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Styled component for product images with fixed height
const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

// Styled components for product title and price
const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
`;

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <ProductGrid>
      {filteredProducts.length === 0 ? (
        <p>No products found for "{searchQuery}"</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price} USD</ProductPrice>
          </ProductCard>
        ))
      )}
    </ProductGrid>
  );
};

export default ProductList;
