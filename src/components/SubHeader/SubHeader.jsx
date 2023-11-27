import React from "react";
import { Link } from "react-router-dom";
import "./SubHeader.scss";

const SubHeader = () => {
  return (
    <div className="SubHeader">
      <img src="../src/assets/icon.png" alt="" />
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/orders">
          Orders
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default SubHeader;
