import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Home.scss";
import { LikeOutlined } from "@ant-design/icons";

const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductContext);
  const [msg, setMsg] = useState({});

  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const sorted = [...products];

    sorted.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    setSortedProducts(sorted);
  }, [products, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const addToCart = (product) => {
    addCart(product);
    setMsg({
      ...msg,
      [product.id]: (
        <span>
          Added to the cart <LikeOutlined />
        </span>
      ),
    });
  };

  return (
    <div className="containerHome">
      <h1 className="h1Home">Welcome to StrikeGear!</h1>
      <section className="sort">
        <button className="orderButtons" onClick={() => handleSort("asc")}>
          <span>Order Price Low-High</span>
        </button>
        <button className="orderButtons" onClick={() => handleSort("desc")}>
          <span>Order Price High-Low</span>
        </button>
      </section>
      <div className="products">
        {sortedProducts.map((product) => {
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
