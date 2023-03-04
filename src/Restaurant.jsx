import React from "react";
import "./Restaurant.css";

export default function Restaurant(props) {
  return (
    <div className="Restaurant">
      <section>
        <h5>{props.restaurantName}</h5>
        <p>
          {props.street}
          <br />
          {props.cityZip}
        </p>
        <p>
          <a href={props.phoneLink} className="phoneLink">
            {props.phoneNumber}
          </a>
        </p>
        <p>
          <a
            href={props.menuLink}
            target="_blank"
            rel="noreferrer"
            className="menuLink"
          >
            Menu
          </a>
        </p>
      </section>
    </div>
  );
}
