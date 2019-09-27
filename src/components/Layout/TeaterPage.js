import React from "react";
import TeaterShows from "./TeaterShows";
import { Grid } from "@material-ui/core";
import logo from "../../static/RogalandTeaterLogo.jpg";
import { fontWeight } from "@material-ui/system";

const TeaterPage = () => {
  return (
    <div>
      <img
        width="120"
        src={logo}
        alt="logo"
        style={{ display: "inline-block", float: "left", margin: "30px" }}
      />
      <div
        style={{
          width: "1000px",
          margin: "auto"
        }}
      >
        <div style={{ margin: "30px 30px 30px 0" }}>
          <span
            style={{
              color: "white",
              fontSize: "100px",
              fontWeight: "lighter"
            }}
          >
            Spilles nå
          </span>
        </div>

        <TeaterShows />
      </div>
    </div>
  );
};

export default TeaterPage;
