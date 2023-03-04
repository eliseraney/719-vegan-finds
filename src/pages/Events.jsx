import React from "react";
import Footer from "../Footer";

import "./Events.css";

export default function Events() {
  return (
    <div className="Events">
      <h1>Events</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&showCalendars=0&src=NzE5dmVnYW5maW5kc0BnbWFpbC5jb20&color=%23039BE5"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        title="Colorado Springs Vegan Events"
        className="eventsCalendar"
      ></iframe>
      <Footer />
    </div>
  );
}
