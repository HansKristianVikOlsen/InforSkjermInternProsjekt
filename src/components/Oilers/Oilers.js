import React from "react";
import TeamEventsPage from "../Layout/TeamEventsPage"


const baseUrl = "https://vglive.no/api/vg/participants/teams/48876";
const imageUrl = "http://www.oilers.no/wp-content/uploads/oilers-logo.svg"


function Oilers() {
  return (
    <div>
      <div style={{ margin: "1% auto", overflow: "hidden", width: "150px", height: "150px", position: "relative" }}>
        <img
          width="150"
          position="absolute"
          src={imageUrl}
          alt="logo"
        />
      </div>
      <TeamEventsPage baseUrl={baseUrl} imageUrl={imageUrl} />
    </div>
  );
}
export default Oilers;
