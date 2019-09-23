import React from "react";
import MatchBox from "./MatchBox";

function MatchList({ events, teamList }) {
  return (
    <div>
      {Object.values(events).map(event =>
        (
          <MatchBox key={event.id} event={event} teamList={teamList} />
        )
      )
      }
    </div>
  );
}

export default MatchList;
