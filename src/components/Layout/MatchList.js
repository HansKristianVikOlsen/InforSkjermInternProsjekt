import React from "react";
import MatchBox from "./MatchBox";
import { makeStyles } from "@material-ui/styles";



const useStyles = makeStyles(theme => ({
  events: {
    marginLeft: "5%",
    marginRight: "5%",
  }
}));

function MatchList({ events, teamList }) {
  const classes = useStyles();
  return (
    <div className={classes.events}>
      {events.map(event =>
        <MatchBox key={event.id} event={event} teamList={teamList} />
      )}
    </div>
  );
}

export default MatchList;
