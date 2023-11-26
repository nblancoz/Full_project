import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link className="link" to="/register">Sign up</Link>
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/profile">Profile</Link>
    </div>
  );
};

export default Header;
