import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <span>
        <a
          className="email"
          href="mailto: 719veganfinds@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </span>
      <span>
        <a
          href="https://www.instagram.com/719veganfinds"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </span>
    </div>
  );
}
