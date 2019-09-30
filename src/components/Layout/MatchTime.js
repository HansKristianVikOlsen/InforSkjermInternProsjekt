import React from "react";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: "24px",
    fontFamily: "'Source Sans Pro', sans-serif",
    color: "white"
  }
}));

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
  const classes = useStyles();

  return (
    <Typography className={classes.text}>
      <Grid container spacing={1} >
        <Grid item xs={5} sm={3} md={5} lg={4} >
          {(date.getDate() < 10 ? "0" : "")}{date.getDate()} {month[date.getMonth()].toUpperCase()}

        </Grid>
        <Grid item xs={7} sm={9} md={7} lg={8} alignItems="left">
          {date.getHours()}:{(date.getMinutes() < 10 ? "0" : "")}{date.getMinutes()}
        </Grid>
      </Grid>
    </Typography>
  )
};

export default MatchTime;