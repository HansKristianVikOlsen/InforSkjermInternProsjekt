import React, { useState, useEffect } from "react";
import { getNextMatches, getTableData } from "../../api/Vikingcalls";
import MatchList from "./MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";

import "./Viking.css";

function Viking() {
  const [matches, setMatches] = useState({});
  const [table, setTable] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);

  useEffect(() => {
    getTableData()
      .then(_table => setTable(_table))
      .then(setLoadingTable(false));
    getNextMatches()
      .then(_matches => setMatches(_matches))
      .then(setLoading(false));
  }, []);

  return (
    <>
      <h1 style={{ color: "#FF6400", textAlign: "center" }}>
        Viking sine kamper
      </h1>
      {loading && loadingTable ? (
        <Spinner />
      ) : (
        <MatchList matches={matches} table={table} />
      )}
    </>
  );
}
/*
      <h1>Viking sine kamper</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MatchList matches={matches} />
          <MatchTable table={table} />
        </>
      )}
      */
export default Viking;
