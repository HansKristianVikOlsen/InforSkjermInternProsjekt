import React from "react";
import logo from "../../static/viking.png";
import TeamEventsPage from "../Layout/TeamEventsPage";


const baseUrl = "https://vglive.no/api/vg/participants/teams/22988";

function Viking() {

  return (
    <div>
      <div style={{ margin: "1% auto", overflow: "hidden", width: "200px", height: "150px", position: "relative" }}>
        <img
          width="200"
          src={logo}
          alt="logo"
        />
      </div>
      <TeamEventsPage baseUrl={baseUrl} />
    </div>
  );
}
export default Viking;
