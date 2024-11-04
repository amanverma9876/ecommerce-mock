import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import { useNavigate } from 'react-router-dom';
import './ProductListing.css';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };
    loadProducts();
  }, []);

  const handleBuyNow = (product) => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button onClick={() => handleBuyNow(product)}>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
