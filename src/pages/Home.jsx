import React from "react";
import Footer from "../Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <header>
        <h1>719 Vegan Finds</h1>
      </header>
      <iframe
        title="Vegan Finds in Colorado Springs"
        src="https://www.google.com/maps/d/embed?mid=1_E5Khmf5-_gW7A9Wdh28ibQpq3f5d1k&ehbc=2E312F"
        width="640"
        height="480"
      ></iframe>
      <Footer />
    </div>
  );
}
