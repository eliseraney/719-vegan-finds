import React from "react";
import Footer from "../Footer";

import "./VeganFriendly.css";

export default function VeganFriendly() {
  let restaurantInfo = [
    {
      name: "Aroi Thai Food",
      street: "1025 N Academy Blvd",
      cityZip: "Colorado Springs, CO 80909",
      phoneNumber: "(719) 2478471",
      phoneLink: "tel:71962478471",
      menu: "https://aroithaifood.com",
    },
    {
      name: "Adam's Mountain Cafe",
      street: "26 Manitou Ave",
      cityZip: "Manitou Springs, CO 80829",
      phoneNumber: "(719) 685-1430",
      phoneLink: "tel:7196851430",
      menu: "https://adamsmountaincafe.com/menu/",
    },
    {
      name: "Baked by Bros.",
      street: "Delivery Only",
      menu: "https://www.bakedbybros.com/menu",
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
      name: "The Carter Payne",
      street: "320 S Weber St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 306-5006",
      phoneLink: "tel:7193065006",
      menu: "https://www.thecarterpayne.com/immersecuisine",
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
      name: "Chiba Bar",
      street: "19 E Kiowa St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 635-9599",
      phoneLink: "tel:7196359599",
      menu: "https://www.chibabar.co/",
    },
    {
      name: "Edelweiss German Restaurant",
      street: "34 E Ramona Ave",
      cityZip: "Colorado Springs, CO 80905",
      phoneNumber: "(719) 633-2220",
      phoneLink: "tel:7196332220",
      menu: "https://www.edelweissrest.com",
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
      name: "Ephemera",
      street: "514 S Tejon St Suite 250a",
      cityZip: "Colorado Springs, CO 80903",
      menu: "https://www.ephemeradinners.com/",
    },
    {
      name: "Everest Nepal",
      street: "28 E Bijou St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 437-3892",
      phoneLink: "tel:7194373890",
      menu: "http://www.everestnepaltogo.com",
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
      name: "High Rise Pizza Kitchen",
      street: "6660 Delmonico Dr F",
      cityZip: "Colorado Springs, CO 80919",
      phoneNumber: "(719) 375-5694",
      phoneLink: "tel:7193755694",
      menu: "https://www.highrisepizzakitchen.com",
    },
    {
      name: "Kawa Coffee",
      street: "2427 N Union Blvd",
      cityZip: "Colorado Springs, CO 80909",
      phoneNumber: "(719) 473-5292",
      phoneLink: "tel:7194735292",
      menu: "https://www.kawa-coffee.com",
    },
    {
      name: "Mausam Indian Flavors",
      street: "3167 W Colorado Ave",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 362-3300",
      phoneLink: "tel:7193623300",
      menu: "https://mausamrestaurant.com",
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
      name: "Nacho Matrix",
      street: "2727 N Cascade Ave #105/111",
      cityZip: "Colorado Springs, CO 80907",
      phoneNumber: "(719) 920-5349",
      phoneLink: "tel:7199205349",
      menu: "https://nachomatrix.com/",
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
      name: "Ola Juice Bar (Downtown)",
      street: "27 E Kiowa St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 633-3111",
      phoneLink: "tel:7196333111",
      menu: "https://www.olajuicebar.com/menu",
    },
    {
      name: "Ola Juice Bar (Garden of the Gods)",
      street: "1025 Garden of the Gods Rd",
      cityZip: "Colorado Springs, CO 80907",
      phoneNumber: "(719) 698-4140",
      phoneLink: "tel:7196984140",
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
      name: "The Rabbit Hole",
      street: "101 N Tejon St",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 203-5072",
      phoneLink: "tel:7192035072",
      menu: "https://www.rabbitholedinner.com",
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
      name: "Sacred Ground Cafe",
      street: "1801 Cheyenne Blvd",
      cityZip: "Colorado Springs, CO 80906",
      phoneNumber: "(719) 475-0888",
      phoneLink: "tel:7194750888",
      menu: "https://www.sacredgroundcafe.com",
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
      name: "Shangri-La",
      street: "8850 N Union Blvd",
      cityZip: "Colorado Springs, CO 80920",
      phoneNumber: "(719) 495-1738",
      phoneLink: "tel:7194951738",
      menu: "https://shangrilacs.com",
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
      name: "Taste of Ethiopia",
      street: "3680 Citadel Dr N",
      cityZip: "Colorado Springs, CO  80909",
      phoneNumber: "(719) 574-6867",
      phoneLink: "tel:7195746867",
      menu: "https://www.tasteofethiopiacolorado.com",
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
      name: "Trinity Brewing",
      street: "1466 Garden of the Gods Rd",
      cityZip: "Colorado Springs, CO 80907",
      phoneNumber: "(719) 497-2739",
      phoneLink: "tel:7194972739",
      menu: "https://www.trinitybrew.com/food",
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
      name: "The UTE Restaurant",
      street: "21 N Nevada Ave",
      cityZip: "Colorado Springs, CO 80903",
      phoneNumber: "(719) 634-0003",
      phoneLink: "tel:7196340003",
      menu: "https://theuterestaurant.com/food-menu/",
    },
    {
      name: "Urban Tandoor",
      street: "8125 N Academy Blvd",
      cityZip: "Colorado Springs, CO 80920",
      phoneNumber: "(719) 593-1126",
      phoneLink: "tel:7195931126",
      menu: "https://www.theurbantandoor.com",
    },
    {
      name: "Westside Cantina",
      street: "2611 W Colorado Ave Suite 100",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 375-5727",
      phoneLink: "tel:7193755727",
      menu: "https://www.westsidecantina.com/menu",
    },
    {
      name: "Yellow Mountain Tea House",
      street: "2616 W Colorado Ave #21",
      cityZip: "Colorado Springs, CO 80904",
      phoneNumber: "(719) 247-8487",
      phoneLink: "tel:7192478487",
      menu: "https://www.yellow-mountain-organic-tea.com",
    },
    {
      name: "Zaika",
      street: "4661 Centennial Blvd",
      cityZip: "Colorado Springs, CO 80919",
      phoneNumber: "(719) 599-7337",
      phoneLink: "tel:7195997337",
      menu: "https://www.www.zaikacosprings.com",
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
