import React from "react";
import Footer from "../Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <header className="fluid">
        <h1>719 Vegan Finds</h1>
      </header>
      <iframe
        title="Vegan Finds in Colorado Springs"
        src="https://www.google.com/maps/d/embed?mid=1_E5Khmf5-_gW7A9Wdh28ibQpq3f5d1k&ehbc=2E312F"
        width="640"
        height="480"
      ></iframe>
      <section className="legend">
        <div>
          <img
            src="/images/purple-carrot.png"
            alt="Purple carrot"
            className="carrot"
          />
          <span>= Vegan</span>
        </div>
        <div>
          <img
            src="/images/orange-carrot.png"
            alt="Orange Carrot"
            className="carrot"
          />
          <span>= Vegan-Friendly</span>
        </div>
      </section>

      <h5>
        If you have suggestions for additional places to be added to the map,
        please{" "}
        <a href="./Contact" className="contactUs">
          contact us
        </a>
      </h5>
      <Footer />
    </div>
  );
}
