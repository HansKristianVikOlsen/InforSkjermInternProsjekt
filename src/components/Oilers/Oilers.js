import React, { useState, useEffect } from "react";
import { getNextMatches } from "../../api/Oilerscalls";
import MatchList from "../Layout/MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import "../Layout/MatchPage.css";

function Oilers() {
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
      <h1 style={{ color: "#FF6400", textAlign: "center", margin: ".5em" }}>
        <img
          width="200"
          src="http://www.oilers.no/wp-content/uploads/oilers-logo.svg"
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
//{loading ? <Spinner /> : <MatchTable table={table} />}
{/* <>
      <h1>Oilers sine kamper</h1>
      {loading ? (
        <Spinner />
      ) : (
          <>
            <MatchList matches={matches} />
            <MatchTable table={table} />
          </>
        )}
    </> */}
export default Oilers;
