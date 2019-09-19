import React, { useState, useEffect } from "react";
import { getNextMatches, getTableData } from "../../api/Vikingcalls";
import Spinner from "../../common/Spinner";
import MatchTable from "../Layout/MatchTable";

const VikingTable = () => {
  const [teamList, setTeamList] = useState({});
  const [table, setTable] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTableData()
      .then(_table => {
        setTable(_table.standings ? Object.values(_table.standings) : []);
        setTeamList(_table);
      })
      .then(setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <Spinner /> : <MatchTable table={table} teamList={teamList} />}
    </div>
  );
};

//_table.participants ? Object.values(_table.participants) : []
export default VikingTable;
