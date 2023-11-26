import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="sort">
        <Link>
          <span>Order Low-High</span>
        </Link>
        <Link>
          <span>Order High-Low</span>
        </Link>
      </section>
      <div className="products">
        {products.map((product) => {
          return (
            <section className="cardContainer">
              <div className="card" key={product.id}>
                <img src="../src/assets/Portugal-HomeShirt.jpeg" alt="" />
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h3>{product.price}€</h3>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Products;
