import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <h3 className="pContact">Here you can contact us</h3>
      <div className="containerContact">
        <div className="contactLogos">
          <img className="contact" src="../src/assets/phone-logo.avif" alt="" />
          <img
            className="contact"
            src="../src/assets/whatsapp-logo.png"
            alt=""
          />
          <img className="contact" src="../src/assets/gmail-logo.jpeg" alt="" />
          <img className="contact" src="../src/assets/x-logo.avif" alt="" />
          <img className="contact" src="../src/assets/ig-logo.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
