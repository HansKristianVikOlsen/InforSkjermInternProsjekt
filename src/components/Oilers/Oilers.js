import React, { useState, useEffect } from "react";
import { getNextMatches, getTableData } from "../../api/Oilerscalls";
import MatchList from "./MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import MatchTable from "./MatchTable";

function Oilers() {
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
      <h1>Oilers sine kamper</h1>
      {loading ? <Spinner /> : <MatchList matches={matches} />}
      {loading ? <Spinner /> : <MatchTable table={table} />}
    </>
  );
}

export default Oilers;
