import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/productApi';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const productData = await fetchProductById(id);
      setProduct(productData);
    };
    getProduct();
  }, [id]);

  return product ? (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductDetail;
