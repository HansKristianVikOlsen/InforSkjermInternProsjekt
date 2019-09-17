import React from "react";
import MatchCard from "./MatchCard";

function MatchList(props) {
  console.log(props);
  console.log("----------------");
  const events = props.matches.events;
  console.log(events);

  return (
    <div>
      {props.matches.events
        ? Object.keys(events).map(key => {
            return (
              <MatchCard event={events[key]} table={props.table} />
              /*
              <li style={{ textTransform: "capitalize" }} key={events[key]}>
                {events[key].slugName} Dato: {events[key].startDate}
              </li>
              */
            );
          })
        : null}
    </div>
  );
}
export default MatchList;
