import React from "react";
import Footer from "../Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <section>
        <h5>Email</h5>
        <p>
          <a href="mailto: 719veganfinds@gmail.com" className="emailLink">
            719veganfinds@gmail.com
          </a>
        </p>
      </section>
      <Footer />
    </div>
  );
}
