import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="footer1">
        <p>Find a store</p>
        <p>Feedback</p>
        <p>Work with us</p>
        <p>About Us</p>
      </div>
      <div className="footer2">
        <p>Help</p>
        <p>Order Status</p>
        <p>Shipping & Delivery</p>
        <p>Payment Options</p>
        <p>Cancel Order</p>
        <p>Contact Us</p>
      </div>
      <div className="footer3">
        <p>News</p>
        <p>Discounts</p>
        <p>Athletes</p>
        <p>Birthdays</p>
      </div>
      <div className="logos">
        <img src="../src/assets/phone-logo.avif" alt="" />
        <img src="../src/assets/whatsapp-logo.png" alt="" />
        <img src="../src/assets/gmail-logo.jpeg" alt="" />
        <img src="../src/assets/x-logo.avif" alt="" />
        <img src="../src/assets/ig-logo.webp" alt="" />
      </div>
    </div>
  );
};

export default Footer;
