import React, { useState, useEffect } from "react";
import { getNextMatches, getTableData } from "../../api/Vikingcalls";
import MatchList from "../Layout/MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";

import "./Viking.css";

function Viking() {
  const [matches, setMatches] = useState({});
  const [teamList, setTeamList] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);


  useEffect(() => {
    getTableData()
      .then(_table => {
        setTeamList(_table.participants ? Object.values(_table.participants) : []);
      })
      .then(setLoadingTable(false));
    getNextMatches()
      .then(_matches => setMatches(_matches.events ? Object.values(_matches.events).filter(event => event.tournament.phaseType !== "cup") : []))
      .then(setLoading(false));
  }, []);


  return (
    <>
      <h1 style={{ color: "#FF6400", textAlign: "center", margin: "100px" }}>
        VIKINGKAMPER
      </h1>
      {loading && loadingTable ? (
        <Spinner />
      ) : (
          <MatchList events={matches} teamList={teamList} />
        )}
    </>
  );
}
export default Viking;
