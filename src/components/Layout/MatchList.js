import React from "react";
import MatchBox from "./MatchBox";

function MatchList({ events, teamList }) {


  return (
    <div>
      {events
        ? Object.keys(events).map(key => {
          return (
            <MatchBox key={key} event={events[key]} teamList={teamList} />
          );
        })
        : null}
    </div>
  );
}

export default MatchList;
