import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.scss"
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1>This are the products available:</h1>
      <Link><span>Order Low-High</span></Link>
      <Link><span>Order High-Low</span></Link>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div>
              <h2>Name: {product.name}</h2>
              <h3>Description: {product.description}</h3>
              <h3>Price: {product.price}€</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
