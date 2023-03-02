import React from "react";

import "./Calendar.css";

export default function Calendar(props) {
  return (
    <div className="Restaurant">
      <section>
        <h5>{props.eventName}</h5>
        <p>
          {props.eventDate}
          <br />
          {props.eventTime}
        </p>
        <p>{props.eventLocation}</p>
        <p>
          <a href={props.eventLink} target="_blank" rel="noreferrer">
            More Info
          </a>
        </p>
      </section>
    </div>
  );
}
