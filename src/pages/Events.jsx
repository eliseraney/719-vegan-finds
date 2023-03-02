import React from "react";
import Calendar from "../Calendar";
import Footer from "../Footer";

export default function Events() {
  return (
    <div className="Events">
      <h1>Events</h1>
      <div className="disclaimer">
        <small>*Tickets required</small>
      </div>
      <Calendar
        eventName="An Evening at Fern's*"
        eventDate="March 8, 2023"
        eventTime="6 PM MST"
        eventLocation="Fern's Diner & Drinkery"
        eventLink="https://thejointveganstreetfood.square.site/?fbclid=PAAaZTdeim3SpseGfsFf6ZXobjO4hGYQwMAjvB9Hq1vEBVbK_hqS3vetku6Yw&location=11ec1a33df1507ea98b5ac1f6bbba82c&item=101"
      />
      <Calendar
        eventName="An Evening at Fern's*"
        eventDate="March 9, 2023"
        eventTime="6 PM MST"
        eventLocation="Fern's Diner & Drinkery"
        eventLink="https://thejointveganstreetfood.square.site/?location=11ec1a33df1507ea98b5ac1f6bbba82c"
      />
      <Calendar
        eventName="Helio Night Market"
        eventDate="April 23, 2023"
        eventTime="4 PM MST"
        eventLocation="The Black Sheep"
        eventLink="https://www.helionightmarket.com/"
      />
      <Calendar
        eventName="Springs Vegan Market"
        eventDate="May 13, 2023"
        eventTime="10 AM - 2 PM MST"
        eventLocation="Hillside Community Center"
        eventLink="https://www.springsveganmarket.com/"
      />
      <Footer />
    </div>
  );
}
