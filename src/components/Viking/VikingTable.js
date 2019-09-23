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
  if (hasError) return <div>{errorMessage}</div>;

  const tableStandings = data.standings ? Object.values(data.standings) : [];
  const tableParticipants = data.participants
    ? Object.values(data.participants)
    : [];
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
        <MatchTable
          tableStandings={tableStandings}
          tableParticipants={tableParticipants}
        />
      )}
    </div>
  );
};

//_table.participants ? Object.values(_table.participants) : []
export default VikingTable;
