import React from "react";
import Footer from "../Footer";

import "./About.css";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <section>
        <p></p>
      </section>
      <section className="aboutGrid">
        <div>
          <div className="aboutPhoto">
            <img
              src="/images/Morgan.jpg"
              alt="Morgan sitting on a bench with two dogs on either side."
              className="img-fluid"
            />
          </div>
          <div className="aboutSection">
            <h3>Morgan</h3>
            <p className="title">Co-founder, Data Collection & Management</p>
            <p className="paragraph">
              Morgan has been in Colorado Springs since 2013 and started the
              transition to a plant-based lifestyle in 2020. She had already
              eliminated dairy and eggs from her diet a few years prior and
              started only eating meat a few times a week. After a few months,
              she decided to eliminate it completely and made the switch to
              fully plant based eating. Her philosophy is not about being a
              perfect vegan, but about making as many plant-based choices as
              possible to eliminate her impact on the world. She is an avid
              outdoor enthusiast who runs ultramarathons, mountain bikes, hikes,
              snowboards, and gets outside as much as possible. Usually you will
              find her on the trails with her two pups Lana, a treeing walker
              coonhound mix, and Nova, a siberian husky, or drinking a beer at
              Fossil Craft Beer Co. Her favorite restaurant in the area is
              Bambino’s because she can load as many toppings on the pizza as it
              can fit and top it with pistachios!
            </p>
          </div>
        </div>
        <div>
          <div className="aboutPhoto">
            <img
              src="/images/elisephoto.jpg"
              alt="Elise holding a dog."
              className="img-fluid elisePhoto"
            />
          </div>
          <div className="aboutSection">
            <h3>Elise</h3>
            <p className="title">Co-founder, Website Design & Development</p>
            <p className="paragraph">
              Elise transitioned to the vegan lifestlye after watching The
              Engine 2 Diet in 2012 (although it took her a few tries to
              eliminate cheese). Years later, and a degree in animal behavior
              later, it became less about the health benefits and more about the
              animals when she learned about the atrocities committed by the
              animal industry. Elise moved to Colorado Springs from Austin in
              2016. Since then, she has run a successful dog walking and pet
              sitting business. In her free time, she enjoys hiking, gaming on
              her PC, and looking for delicious vegan food in the Springs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
