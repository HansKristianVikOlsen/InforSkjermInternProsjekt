import React, { useState, useEffect } from "react";
import { getTableData } from "../../api/ApiDataCalls";
import Spinner from "../../common/Spinner";
import MatchTable from "../Layout/MatchTable";

const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1947/standings?type=live-changes";

const OilersTable = () => {
  const [teamList, setTeamList] = useState({});
  const [table, setTable] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTableData(tableUrl)
      .then(_table => {
        setTable(_table.standings ? Object.values(_table.standings) : []);
        setTeamList(_table);
      })
      .then(setLoading(false));
  }, []);

  return (
    <div className="table">
      {loading ? <Spinner /> : <MatchTable table={table} teamList={teamList} />}
    </div>
  );
};

//_table.participants ? Object.values(_table.participants) : []
export default OilersTable;
