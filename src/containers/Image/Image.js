import React from "react";
import Email from "../Email/Email";
import "./image.css";

function Image(props) {
  return (
    <div className="image">
      <div className="background-image">
        <a href="/" className="logo">
          Joshua Lee
        </a>
        <div className="callout">
          <Email />
        </div>
      </div>
    </div>
  );
}

export default Image;
