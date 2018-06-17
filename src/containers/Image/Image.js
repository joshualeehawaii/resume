import React, { Component } from "react";
import "./image.css";
import Button from "@material-ui/core/Button";

class Image extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="image">
        <div className="background-image">
          <a href="/" className="logo">
            Joshua Lee
          </a>
          <div className="callout">
            <h2 className="tagLine">Have a project idea?</h2>
            <Button
              className="contactButton"
              variant="contained"
              color="primary"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;