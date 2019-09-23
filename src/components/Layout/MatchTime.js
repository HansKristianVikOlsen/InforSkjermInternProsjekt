import React from "react";
import Grid from "@material-ui/core/Grid"


const weekday = new Array(7);
weekday[0] = "Søndag";
weekday[1] = "Mandag";
weekday[2] = "Tirsdag";
weekday[3] = "Onsdag";
weekday[4] = "Torsdag";
weekday[5] = "Fredag";
weekday[6] = "Lørdag";

const MatchTime = ({ date }) => {
  return (
    <Grid container >
      <Grid item xs={3}>
        {weekday[date.getDay()]}
      </Grid>
      <Grid item xs={2}>
        {date.getDate()}/{date.getMonth()}
      </Grid>
      <Grid item xs={3}>
        kl. {date.getHours()}:{(date.getMinutes() < 10 ? "0" : "")}{date.getMinutes()}
      </Grid>
    </Grid>
  )
};

export default MatchTime;
