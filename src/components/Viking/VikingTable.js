import React, { useState, useEffect } from "react";
import { getTableData } from "../../api/ApiDataCalls";
import Spinner from "../../common/Spinner";
import MatchTable from "../Layout/MatchTable";
import useAxiosFetch from "../../api/useAxiosFetch";

const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1877/standings?type=live-changes";

const VikingTable = () => {
  // const [teamList, setTeamList] = useState({});
  // const [table, setTable] = useState({});
  //  const [loading, setLoading] = useState(true);

  const { data, isLoading, hasError, errorMessage } = useAxiosFetch(
    tableUrl,
    {}
  );

  const table = data.standings ? Object.values(data.standings) : [];
  const teamList = data ? Object.values(data) : [];
  /*
  useEffect(() => {
    getTableData(tableUrl)
      .then(_table => {
        setTable(_table.standings ? Object.values(_table.standings) : []);
        setTeamList(_table);
      })
      .then(setLoading(false));
  }, []);
  */

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <MatchTable table={table} teamList={teamList} />
      )}
    </div>
  );
};

//_table.participants ? Object.values(_table.participants) : []
export default VikingTable;
