import React from "react";

export default function Restaurant(props) {
  return (
    <div className="Restaurant">
      <h5>{props.restaurantName}</h5>
      <p>
        {props.street}
        <br />
        {props.cityZip}
      </p>
      <p>{props.phoneNumber}</p>
    </div>
  );
}
