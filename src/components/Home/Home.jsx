import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Home.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductContext);
  const [msg, setMsg] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    addCart(product);
    setMsg({
      ...msg,
      [product.id]: "Added to the cart",
    });
  };

  return (
    <div className="containerHome">
      <h1 className="h1Home">Products</h1>
      {/* <section className="sort">
        <Link>
          <span>Order Low-High</span>
        </Link>
        <Link>
          <span>Order High-Low</span>
        </Link>
      </section> */}
      <div className="products">
        {products.map((product) => {
          return (
            <section className="cardContainer">
              <div className="card" key={product.id}>
                <img className="homeImg" src={product.img} alt="" />
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h3>{product.price}€</h3>
                <button
                  className="homeButton"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
                <p className="msgHome">{msg[product.id]}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
