import React from "react";
import Footer from "../Footer";

import "./Vegan.css";

export default function Vegan() {
  let restaurantInfo = [
    {
      name: "Birchwood Bakehouse",
      street: "Custom orders",
      cityZip: "or found at Burrowing Owl and Fern's Diner & Drinkery",
      menu: "https://birchwoodbakehouse.com/menu",
    },
    {
      name: "Blossom.Baking",
      street: "9233 Chieftan Dr (Pickup & Delivery only)",
      cityZip: "Colorado Springs, CO 80925",
      menu: "https://www.blossbaking.com/",
    },
    {
      name: "Burrowing Owl",
      street: "1791 S 8th St, Colorado Springs",
      cityZip: "Colorado Springs, CO 80905",
      phoneNumber: "(719) 434-3864",
      phoneLink: "tel:7194343864",
      menu: "https://www.burrowingowllounge.com/",
    },
    {
      name: "Fern's Diner & Drinkery",
      street: "4645 Fountain Ave",
      cityZip: "Cascade, CO 80809",
      phoneNumber: "(719) 424-7667",
      phoneLink: "tel:7194247667",
      menu: "https://www.fernsdiner.com/food",
    },
    {
      name: "Green Machine Grill",
      street: "Grab & Go at Bread & Butter / Events Only",
      phoneNumber: "(719) 649-3091",
      phoneLink: "tel:7196493091",
      menu: "https://www.greenmachinegrill.com/menu",
    },
    {
      name: "The Joint",
      street: "19 N Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      menu: "https://www.thejointveganstreetfood.com",
    },
    {
      name: "Noice Foods",
      street: "515 Manitou Ave (Pickup & Delivery only)",
      cityZip: "Manitou Springs, CO 80829",
      phoneNumber: "(719) 244-1705",
      phoneLink: "tel:7192441705",
      menu: "https://noicefoods.com/",
    },
    {
      name: "Planted Cakery",
      street: "1753 S 8th St (Pickup Only)",
      cityZip: "Manitou Springs, CO 80905",
      menu: "http://www.plantedcakery.com/menu",
    },
    {
      name: "Runaway Bakeshop",
      street: "Events & Special Orders Only",
      menu: "https://runawaybakeshop.wixsite.com/runaway/what-to-order",
    },
    {
      name: "Santana's Vegan Grill",
      street: "3220 Austin Bluffs Pkwy",
      cityZip: "Colorado Springs, CO 80918",
      phoneNumber: "(719) 694-9331",
      phoneLink: "tel:7196949331",
      menu: "https://santanasvegangrill.com/",
    },
    {
      name: "Sweet Elizabeth's Organics",
      street: "1625 W Uintah St K",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 358-7659",
      phoneLink: "tel:7193587659",
      menu: "https://www.sweetelizabethsorganics.com/bakery-cafe",
    },
    {
      name: "Wildflour Bakehouse",
      street: "Delivery Only",
      menu: "https://wildflour-bakehouse.com/",
    },
  ];

  return (
    <div className="Vegan">
      <h1>Vegan</h1>
      {restaurantInfo.map(function (restaurant, index) {
        return (
          <div className="restaurants">
            <h5 key={index}>{restaurant.name}</h5>
            <p key={index}>{restaurant.street}</p>
            <p key={index}>{restaurant.cityZip}</p>
            <p>
              <a href={restaurant.phoneLink} className="phoneLink">
                {restaurant.phoneNumber}
              </a>
            </p>
            <a
              key={index}
              href={restaurant.menu}
              target="_blank"
              rel="noreferrer"
              className="menuLink"
            >
              Menu
            </a>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
