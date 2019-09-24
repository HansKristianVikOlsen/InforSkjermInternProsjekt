import React from "react";
import Spinner from "../../common/Spinner";
import MatchTable from "../Layout/MatchTable";
import useAxiosFetch from "../../api/useAxiosFetch";
import { filterStandings, filterParticipants } from "../../api/filterData";

const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1947/standings?type=live-changes";

const OilersTable = () => {
  const { data, isLoading, hasError, errorMessage } = useAxiosFetch(
    tableUrl,
    {}
  );
  if (hasError) return <div>{errorMessage}</div>;

  const tableStandings = data.standings
    ? filterStandings(data.standings[0])
    : [];
  const tableParticipants = data.participants
    ? filterParticipants(Object.values(data.participants))
    : [];
  /*
  const tableStandings = data.standings ? Object.values(data.standings) : [];
  const tableParticipants = data.participants
    ? Object.values(data.participants)
    : [];

    */
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
    <div className="table">
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
export default OilersTable;
