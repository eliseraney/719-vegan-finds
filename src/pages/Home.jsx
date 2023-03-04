import React from "react";
import Footer from "../Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <header className="fluid">
        <h1>
          <span>Welcome to</span>
          <br />
          <div>719 Vegan Finds</div>
        </h1>
      </header>
      <section className="about">
        <p>
          A plant-based directory of vegan and vegan-friendly restaurant finds
          in the Colorado Springs area created by two plant-based 719 locals who
          are constantly on the hunt for delicious vegan food!
          <br />
          <br />
          This is an inclusive page that invites all individuals who are on the
          plant-based path or are curious about the plant-based lifestyle to
          find animal free alternatives while also being able to support the
          local restaurant scene.
          <br />
          <br />
          We are hoping to make these choices easier to help individuals pick
          the plant-powered path as much as possible and encourage our local
          restaurants to offer more vegan options on their menus.
        </p>
      </section>
      <iframe
        title="Vegan Finds in Colorado Springs"
        src="https://www.google.com/maps/d/embed?mid=1_E5Khmf5-_gW7A9Wdh28ibQpq3f5d1k&ehbc=2E312F"
        width="640"
        height="480"
      ></iframe>
      <section className="legend">
        <div>
          <img
            src="/images/carrot-pink.png"
            alt="Purple carrot"
            className="carrot"
          />
          <span>= Vegan</span>
        </div>
        <div>
          <img
            src="/images/carrot-purple.png"
            alt="Orange Carrot"
            className="carrot"
          />
          <span>= Vegan-Friendly</span>
        </div>
        <br />
        <div>
          *To ensure items are vegan, please confirm with the restaurant*
        </div>
      </section>

      <h5>
        We rely heavily on the community to assist in submitting feedback, new
        options and information to help us keep the page up to date!
        <br />
        Please{" "}
        <a href="./Contact" className="contactUs">
          contact us{" "}
        </a>
        if you have any suggestions.
      </h5>
      <Footer />
    </div>
  );
}
