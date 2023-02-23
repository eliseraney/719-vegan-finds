import React from "react";
import Restaurant from "../Restaurant";

export default function Vegan() {
  return (
    <div>
      <Restaurant
        restaurantName="Burrowing Owl"
        street="1791 S 8th St, Colorado Springs"
        cityZip="Colorado Springs, CO 80905"
        phoneNumber="(719) 434-3864"
      />
      <Restaurant
        restaurantName="Fern's Diner & Drinkery"
        street="4645 Fountain Ave"
        cityZip="Cascade, CO 80809"
        phoneNumber="(719) 424-7667"
      />
      <Restaurant
        restaurantName="Santana's Vegan Grill"
        street="3220 Austin Bluffs Pkwy"
        cityZip="Colorado Springs, CO 80918"
        phoneNumber="(719) 694-9331"
      />
    </div>
  );
}
