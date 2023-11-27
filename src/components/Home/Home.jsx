import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Home.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
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
                <img src={product.img} alt="" />
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h3>{product.price}€</h3>
                <button>Add to cart</button>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
