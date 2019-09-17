import React, { useState, useEffect } from "react";
import { getNextMatches, getTableData } from "../../api/Vikingcalls";
import MatchList from "./MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import MatchTable from "./MatchTable";

function Viking() {
  const [matches, setMatches] = useState({});
  const [table, setTable] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTableData().then(_table => setTable(_table));
    getNextMatches()
      .then(_matches => setMatches(_matches))
      .then(setLoading(false));
  }, []);

  return (
    <>
      <h1>Viking sine kamper</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MatchList matches={matches} />
          <MatchTable table={table} />
        </>
      )}
    </>
  );
}

export default Viking;
