import React, { useState, useEffect } from "react";
import { getNextMatches } from "../../api/Vikingcalls";
import MatchList from "./MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";

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
      <h1>Viking sine kamper</h1>
      {loading ? <Spinner /> : <MatchList matches={matches} />}
    </>
  );
}

export default Viking;
