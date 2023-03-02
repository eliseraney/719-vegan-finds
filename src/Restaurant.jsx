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
        <p>{props.phoneNumber}</p>
        <p>
          <a href={props.menuLink} target="_blank" rel="noreferrer">
            Menu
          </a>
        </p>
      </section>
    </div>
  );
}
