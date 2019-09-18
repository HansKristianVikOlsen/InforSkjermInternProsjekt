import React, { useState, useEffect } from "react";
import { getNextMatches } from "../../api/Vikingcalls";
import MatchList from "../Layout/MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import logo from "../../static/viking.png";

import "../Layout/MatchPage.css";

function Viking() {
  const [matches, setMatches] = useState({});
  const [teamList, setTeamList] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getNextMatches()
      .then(_matches => {
        setMatches(_matches.events ? Object.values(_matches.events) : []);
        setTeamList(_matches.participants ? Object.values(_matches.participants) : [])
      })
      .then(setLoading(false));
  }, []);


  return (
    <>
      <h1 style={{ color: "#FF6400", textAlign: "center", margin: "50px" }}>
        <img width="200"
          src={logo}
          alt="logo"
        />
      </h1>
      {loading ? (
        <Spinner />
      ) : (
          <MatchList events={matches} teamList={teamList} />
        )}
    </>
  );
}
export default Viking;
