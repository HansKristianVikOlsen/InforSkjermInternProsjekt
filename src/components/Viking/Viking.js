import React, { useState, useEffect } from "react";
import { getMatchesAndTeams } from "../../api/ApiDataCalls";
import MatchList from "../Layout/MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import logo from "../../static/viking.png";

import "../Layout/MatchPage.css";


const baseUrl = "https://vglive.no/api/vg/participants/teams/22988";


function Viking() {
  const [matches, setMatches] = useState({});
  const [teamList, setTeamList] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMatchesAndTeams(baseUrl)
      .then(({ events, teams }) => {
        setMatches(events);
        setTeamList(teams);
        setLoading(false)
      })

  }, []);


  return (
    <>
      <h1 style={{ color: "#FF6400", textAlign: "center" }}>
        <img width="200" src={logo} alt="logo" />
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
