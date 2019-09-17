import React, { useState, useEffect } from "react";
import { getNextMatches } from "../../api/Vikingcalls";
import MatchList from "./MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import MatchCard from "./MatchCard"
import "./Viking.css"
import { textAlign } from "@material-ui/system";

function Viking() {
  const [matches, setMatches] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNextMatches()
      .then(_matches => setMatches(_matches))
      .then(setLoading(false));
  }, []);

  return (
    <>
      <h1 style={{ color: "#FF6400", textAlign: "center" }}>Viking sine kamper</h1>
      {loading ? <Spinner /> : <MatchList matches={matches} />}
      <MatchCard />
    </>
  );
}

export default Viking;
