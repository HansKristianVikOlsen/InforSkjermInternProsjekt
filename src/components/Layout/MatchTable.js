import React from "react";
import TableBox from "./TableBox";

function MatchTable({ tableStandings, tableParticipants }) {
  return (
    <div>
      <TableBox teams={tableStandings} participant={tableParticipants} />
    </div>
  );
}

export default MatchTable;
