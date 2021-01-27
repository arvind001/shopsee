import React, { useState, useEffect } from "react";
import Header from "../../components/header/index";
import { Grid } from "@material-ui/core";
import shoppingImage from "./shopping-image.png";
import Button from "../../components/button/index";
import "./style.css";

export default function LandingPage(props) {
  const [hovered, setHovered] = useState(false);

  const hoveringEnter = () => {
    setHovered(true);
  };

  const hoveringLeave = () => {
    setHovered(false);
  };

  return (
    <div className="landing-page">
      <div className="top-section">
        <Header />
        <Grid container direction="row" className="landing-intro__container">
          <Grid
            item
            container
            direction="column"
            xs={7}
            alignItems="flex-start"
            justify="center"
          >
            <div className="landing-intro-text">
              ShopSee is a blah blah blah blah blah blah blah
            </div>
            <div className="landing-intro-subtext">
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
            </div>
            <div className="email-capture__container">
              <input
                type="text"
                className="email-capture__input"
                placeholder="Enter email address"
              />
              <Button name="Join!" />
              {/* <div className="email-capture__button">Join!</div> */}
            </div>
          </Grid>
          <Grid item container xs={5} justify="center">
            <div
              className="stream"
              onMouseOver={() => hoveringEnter()}
              onMouseOut={() => hoveringLeave()}
            >
              <img
                src={shoppingImage}
                width="300"
                height="477"
                className="stream__thumbnail"
              />
            </div>
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        direction="row"
        className="second-block"
        style={{ backgroundColor: "#2fc6a8", padding: "10%" }}
      >
        <Grid item container xs={5} justify="center">
          <div
            className="stream differentColor"
            onMouseOver={() => hoveringEnter()}
            onMouseOut={() => hoveringLeave()}
          >
            <img
              src={shoppingImage}
              width="300"
              height="477"
              className="stream__thumbnail"
            />
          </div>
        </Grid>
        <Grid item container xs={7}>
          <div className="landing-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className="second-block"
        style={{ backgroundColor: "white", padding: "10%" }}
      >
        <Grid item container xs={7}>
          <div className="landing-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </div>
        </Grid>
        <Grid item container xs={5} justify="center">
          <div
            className="stream"
            onMouseOver={() => hoveringEnter()}
            onMouseOut={() => hoveringLeave()}
          >
            <img
              src={shoppingImage}
              width="300"
              height="477"
              className="stream__thumbnail"
            />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className="second-block"
        style={{ backgroundColor: "#2fc6a8", padding: "10%" }}
      >
        <Grid item container xs={5} justify="center">
          <div
            className="stream differentColor"
            onMouseOver={() => hoveringEnter()}
            onMouseOut={() => hoveringLeave()}
          >
            <img
              src={shoppingImage}
              width="300"
              height="477"
              className="stream__thumbnail"
            />
          </div>
        </Grid>
        <Grid item container xs={7}>
          <div className="landing-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
