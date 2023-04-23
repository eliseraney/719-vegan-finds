import React from "react";
import Footer from "../Footer";

import "./VeganFriendly.css";

export default function VeganFriendly() {
  let restaurantInfo = [
    {
      name: "Adam's Mountain Cafe",
      street: "26 Manitou Ave",
      cityZip: "Manitou Springs, CO 80829",
      phoneNumber: "(719) 685-1430",
      phoneLink: "tel:7196851430",
      menu: "https://adamsmountaincafe.com/menu/",
    },
    {
      name: "AITE - Mediterranean Inspired Foods",
      street: "514 S Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      menu: "https://www.coatiuprise.com/_files/ugd/b622b5_b266346cd3da444088892fbc79ee6df6.pdf",
    },
    {
      name: "Alternative Whisk",
      street: "Pickup Only",
      cityZip: "Monument, CO",
      phoneNumber: "(703) 309-6821",
      phoneLink: "tel:7033096821",
      menu: "https://www.alternativewhisk.com/",
    },
    {
      name: "Bambino's Urban Pizzeria",
      street: "36 E Bijou St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 630-8121",
      phoneLink: "tel:7196308121",
      menu: "https://bambinosurbanpizzeria.com/menu/",
    },
    {
      name: "Baked by Bros.",
      street: "Delivery Only",
      menu: "https://www.bakedbybros.com/menu",
    },
    {
      name: "Benne's Sweet Treats",
      street: "6620 Delmonico Dr., Suite B",
      cityZip: "Colorado Springs, CO 80919",
      phoneNumber: "(719) 315-5237",
      phoneLink: "tel:7193155237",
      menu: "https://www.bennessweettreats.com/",
    },
    {
      name: "Bingo Burger",
      street: "132 N Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 418-6223",
      phoneLink: "tel:7194186223",
      menu: "https://www.bingoburger.com/copy-of-cos-menu",
    },
    {
      name: "Bunzy's and Booze",
      street: "1919 E Boulder St",
      cityZip: "Colorado Springs, CO 80909",
      phoneNumber: "(719) 203-5522",
      phoneLink: "tel:7192035522",
      menu: "https://bunzysandbooze.com/menu",
    },
    {
      name: "Carnelian Coffee Co",
      street: "2428 W Colorado Ave",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 471-0789",
      phoneLink: "tel:7194710789",
      menu: "https://www.carneliancoffeeco.com/",
    },
    {
      name: "Cerberus Brewing Company",
      street: "702 W Colorado Ave",
      cityZip: "Colorado Springs, CO 80905",
      phoneNumber: "(719) 636-2337",
      phoneLink: "tel:7196362337",
      menu: "http://www.cerberusbrewingco.com/food.html",
    },
    {
      name: "Chaang Thai",
      street: "7525 N Academy Blvd",
      cityZip: "Colorado Springs, CO 80920",
      phoneNumber: "(719) 594-4471",
      phoneLink: "tel:7195944471",
      menu: "https://www.chaangthaicos.com/about",
    },
    {
      name: "Elephant Thai",
      street: "3408 N Academy Blvd",
      cityZip: "Colorado Springs, CO 80917",
      phoneNumber: "(719) 597-1175",
      phoneLink: "tel:7195971175",
      menu: "https://www.elephantthaicos.com/menus",
    },
    {
      name: "The Exchange On Tejon",
      street: "526 S Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 635-0277",
      phoneLink: "tel:7196350277",
      menu: "http://www.theexchangeontejon.com/menu.html",
    },
    {
      name: "Fala-Filo",
      street: "6050 N Carefree Cir",
      cityZip: "Colorado Springs, CO 80922",
      phoneNumber: "(719) 358-7865",
      phoneLink: "tel:7193587865",
      menu: "https://www.fala-filo.com/menu",
    },
    {
      name: "Ephemera",
      street: "514 S Tejon St Suite 250a",
      cityZip: "Colorado Springs, CO 80903",
      menu: "https://www.ephemeradinners.com/",
    },
    {
      name: "Javalato Gelato & Cafe",
      street: "9697 Prominent Point Suite #156",
      cityZip: "Colorado Springs, CO 80924",
      phoneNumber: "(719) 424-7929",
      phoneLink: "tel:7194247929",
      menu: "https://www.javalato-coffee-gelato.com/menu/",
    },
    {
      name: "Kelley's Spiedie Shop",
      street: "323 N Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 631-9006",
      phoneLink: "tel:7196319006",
      menu: "https://www.facebook.com/photo/?fbid=678089980986587&set=pb.100063567734207.-2207520000.",
    },
    {
      name: "La'au's Taco Shop",
      street: "830 N Tejon St STE 110",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 578-5228",
      phoneLink: "tel:7195785228",
      menu: "https://www.laaustacoshop.com/menu",
    },
    {
      name: "Monse's Pupuseria",
      street: "115 S 25th St",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 473-0877",
      phoneLink: "tel:7194730877",
      menu: "https://www.monsestasteofelsalvador.online/new-page-4",
    },
    {
      name: "Mountain Mama Natural Foods",
      street: "1625 W Uintah St",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 633-4139",
      phoneLink: "tel:7196334139",
      menu: "http://www.mountainmamanaturalfoods.com/menu",
    },
    {
      name: "Mountainara Cucina Italiana",
      street: "727 Gold Hill Place South",
      cityZip: "Woodland Park, CO 80863",
      phoneNumber: "(719) 687-8803",
      phoneLink: "tel:7196878803",
      menu: "https://mountainara.com/",
    },
    {
      name: "OCC Brewing",
      street: "2316 W Colorado Ave",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 308-2173",
      phoneLink: "tel:7193082173",
      menu: "https://occbrewing.com/menu/",
    },
    {
      name: "Ola Juice Bar",
      street: "27 E Kiowa St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 633-3111",
      phoneLink: "tel:7196333111",
      menu: "https://www.olajuicebar.com/menu",
    },
    {
      name: "Poor Richard's Restaurant",
      street: "324 1/2 N Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 578-5549",
      phoneLink: "tel:7195785549",
      menu: "https://www.poorrichardsrestaurant.com/menus/",
    },
    {
      name: "Rasta Pasta",
      street: "405 N Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 481-6888",
      phoneLink: "tel:7194816888",
      menu: "https://realrastapasta.com/menu/",
    },
    {
      name: "Salad or Bust (IvyWild)",
      street: "1604 S Cascade Ave",
      cityZip: "Colorado Springs, CO 80905",
      phoneNumber: "(719) 368-6117",
      phoneLink: "tel:7193686117",
      menu: "https://saladorbust.com/ivywild-1",
    },
    {
      name: "Salad or Bust (Downtown)",
      street: "8 E Bijou St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 434-2313",
      phoneLink: "tel:7194342313",
      menu: "https://saladorbust.com/ivywild-1",
    },
    {
      name: "Sherpa Garden Restaurant & Bar",
      street: "1005 W Colorado Ave",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 896-5577",
      phoneLink: "tel:7198965577",
      menu: "https://sherpagarden.com/menu/",
    },
    {
      name: "Sivar",
      street: "315 E Pikes Peak Ave Suite 100",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 425-5912",
      phoneLink: "tel:7194255912",
      menu: "https://www.toasttab.com/sivar/v3",
    },
    {
      name: "Slice 420 (East)",
      street: "3725 Oro Blanco Dr",
      cityZip: "Colorado Springs, CO 80917",
      phoneNumber: "(719) 375-0393",
      phoneLink: "tel:7193750393",
      menu: "https://www.slice420.com/menu",
    },
    {
      name: "Slice 420 (West)",
      street: "2501 W Colorado Ave #108",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 368-6977",
      phoneLink: "tel:7193686977",
      menu: "https://www.slice420.com/menu",
    },
    {
      name: "Stir Coffee & Cocktails (North)",
      street: "2330 N Wahsatch Ave",
      cityZip: "Colorado Springs, CO 80907",
      phoneNumber: "(719) 418-6188",
      phoneLink: "tel:7194186188",
      menu: "https://www.stircoffeeandcocktails.com/stir-north-menu",
    },
    {
      name: "Stir Coffee & Cocktails (Downtown)",
      street: "101 N Tejon St Ste 102",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 471-4117",
      phoneLink: "tel:7194714117",
      menu: "https://www.stircoffeeandcocktails.com/stir-downtown-menu",
    },
    {
      name: "Thai Mint Restaurant",
      street: "1725 Briargate Blvd",
      cityZip: "Colorado Springs, CO 80920",
      phoneNumber: "(719) 598-7843",
      phoneLink: "tel:7195987843",
      menu: "https://thaimintco.smiledining.com//?2023020201",
    },
    {
      name: "Thai Taste Cuisine",
      street: "5069 N Academy Blvd",
      cityZip: "Colorado Springs, CO 80918",
      phoneNumber: "(719) 203-6567",
      phoneLink: "tel:7192036567",
      menu: "https://thaitastecuisineco.smiledining.com//?2023020201",
    },
    {
      name: "Tossed @ The Well",
      street: "315 E Pikes Peak Ave Suite 100",
      cityZip: "Colorado Springs, CO 80903",
      menu: "https://www.toasttab.com/the-well-tossed/v3/",
    },
    {
      name: "Trinity Brewing",
      street: "1466 Garden of the Gods Rd",
      cityZip: "Colorado Springs, CO 80907",
      phoneNumber: "(719) 497-2739",
      phoneLink: "tel:7194972739",
      menu: "https://www.trinitybrew.com/food",
    },
    {
      name: "Urban Steam American Bistro",
      street: "1025 S Sierra Madre St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 473-7832",
      phoneLink: "tel:7194737832",
      menu: "https://www.urbansteam.com/our-menu",
    },
    {
      name: "The UTE Restaurant",
      street: "21 N Nevada Ave",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 634-0003",
      phoneLink: "tel:7196340003",
      menu: "https://theuterestaurant.com/food-menu/",
    },
    {
      name: "Uchenna Ethiopian Restaurant",
      street: "2501 W Colorado Ave # 105",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 634-5070",
      phoneLink: "tel:7196345070",
      menu: "https://uchennaalive.com/ethiopian-menu/",
    },
    {
      name: "Westside Cantina",
      street: "2611 W Colorado Ave Suite 100",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 375-5727",
      phoneLink: "tel:7193755727",
      menu: "https://www.westsidecantina.com/menu",
    },
  ];

  return (
    <div className="VeganFriendly">
      <h1>Vegan-Friendly</h1>
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
