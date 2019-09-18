import React, { useEffect } from "react";
import MatchBox from "./MatchBox";

function MatchList({ events, teamList }) {


  useEffect(() => {
    console.log(teamList);
    console.log(events);
  }, [teamList, events]);


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
