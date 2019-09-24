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

const month = new Array(12);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "Mai";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Okt";
month[10] = "Nov";
month[11] = "Des";

const MatchTime = ({ date }) => {
  return (
    <Grid container >
      <Grid item xs>
        {(date.getDate() < 10 ? "0" : "")}{date.getDate()}. {month[date.getMonth()]}
      </Grid>
      <Grid item xs>
        kl. {date.getHours()}:{(date.getMinutes() < 10 ? "0" : "")}{date.getMinutes()}
      </Grid>
    </Grid>
  )
};

export default MatchTime;
{/* <Grid item xs={3}>
        {weekday[date.getDay()]}
      </Grid> */}