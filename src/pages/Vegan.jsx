import React from "react";
import Footer from "../Footer";
import Restaurant from "../Restaurant";

export default function Vegan() {
  return (
    <div className="Vegan">
      <h1>Vegan</h1>
      <Restaurant
        restaurantName="Birchwood Bakehouse"
        street="Custom orders"
        cityZip="or found at Burrowing Owl and Fern's Diner & Drinkery"
        menuLink="https://birchwoodbakehouse.com/menu"
      />
      <Restaurant
        restaurantName="Blossom.Baking"
        street="9233 Chieftan Dr (Pickup & Delivery only)"
        cityZip="Colorado Springs, CO 80925"
        menuLink="https://www.blossbaking.com/"
      />
      <Restaurant
        restaurantName="Burrowing Owl"
        street="1791 S 8th St, Colorado Springs"
        cityZip="Colorado Springs, CO 80905"
        phoneNumber="(719) 434-3864"
        phoneLink="tel:7194343864"
        menuLink="https://www.burrowingowllounge.com/"
      />
      <Restaurant
        restaurantName="Fern's Diner & Drinkery"
        street="4645 Fountain Ave"
        cityZip="Cascade, CO 80809"
        phoneNumber="(719) 424-7667"
        phoneLink="tel:7194247667"
        menuLink="https://www.fernsdiner.com/food"
      />
      <Restaurant
        restaurantName="Noice Foods"
        street="515 Manitou Ave (Pickup & Delivery only)"
        cityZip="Colorado Springs, CO 80829"
        phoneNumber="(719) 244-1705"
        phoneLink="tel:7192441705"
        menuLink="https://noicefoods.com/"
      />
      <Restaurant
        restaurantName="Santana's Vegan Grill"
        street="3220 Austin Bluffs Pkwy"
        cityZip="Colorado Springs, CO 80918"
        phoneNumber="(719) 694-9331"
        phoneLink="tel:7196949331"
        menuLink="https://santanasvegangrill.com/"
      />
      <Restaurant
        restaurantName="Sweet Elizabeth's Organics"
        street="1625 W Uintah St K"
        cityZip="Colorado Springs, CO 80904"
        phoneNumber="(719) 358-7659"
        phoneLink="tel:7193587659"
        menuLink="https://www.sweetelizabethsorganics.com/bakery-cafe"
      />
      <Restaurant
        restaurantName="Wildflour Bakehouse"
        street="Delivery Only"
        menuLink="https://wildflour-bakehouse.com/"
      />
      <Footer />
    </div>
  );
}
