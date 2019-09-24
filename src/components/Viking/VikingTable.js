import React from "react";
import Spinner from "../../common/Spinner";
import MatchTable from "../Layout/MatchTable";
import useAxiosFetch from "../../api/useAxiosFetch";
import { filterStandings, filterParticipants } from "../../api/filterData";

const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1877/standings?type=live-changes";

const VikingTable = () => {
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

export default VikingTable;
