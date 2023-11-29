import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SubHeader.scss";
import { ProductContext } from "../../context/ProductContext/ProductState";

const SubHeader = () => {
  const cart = useContext(ProductContext);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="SubHeader">
      <img src="../src/assets/icon.png" alt="" />
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/cart">
          Cart
        </Link>
      </nav>
    </div>
  );
};

export default SubHeader;
