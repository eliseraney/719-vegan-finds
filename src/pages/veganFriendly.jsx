import React from "react";
import Restaurant from "../Restaurant";

export default function VeganFriendly() {
  return (
    <div>
      <Restaurant
        restaurantName="Monse's Pupuseria"
        street="115 S 25th St"
        cityZip="Colorado Springs, CO 80904"
        phoneNumber="(719) 473-0877"
      />
      <Restaurant
        restaurantName="Westside Cantina"
        street="2611 W Colorado Ave Suite 100"
        cityZip="Colorado Springs, CO 80904"
        phoneNumber="(719) 375-5727"
      />
    </div>
  );
}
