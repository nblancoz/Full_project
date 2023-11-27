import React from "react";
import { Link } from "react-router-dom";
import "./SubHeader.scss"

const SubHeader = () => {
  return (
    <div className="SubHeader">
      <p>aqui el logo</p>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/orders">Orders</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
      <span>Buscador</span>
    </div>
  );
};

export default SubHeader;
