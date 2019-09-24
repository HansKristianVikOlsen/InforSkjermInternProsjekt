import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TeamLogo from "./TeamLogo";
import MatchTime from "./MatchTime";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontFamily: "Sanchez"
  },
  date: {
    textAlign: "left"
  },
  griditem: {
  }
}));

const MatchBox = ({ event, teamList }) => {
  const [homeTeam, setHomeTeam] = useState({});
  const [visitorTeam, setVisitorTeam] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const getTeamById = id => {
      let team = teamList.find(team => team.id === id);
      return team || {};
    };
    setHomeTeam(getTeamById(event.homeTeam));
    setVisitorTeam(getTeamById(event.visitorTeam));
  }, [event, teamList]);


  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      direction="row"
      spacing={3}
    >
      <Grid className={classes.date} item xs={12} md={3}>
        <Typography className={classes.text} variant="h6">
          <MatchTime date={event.startDate} />
        </Typography>
      </Grid>

      <Grid item className={classes.griditem} xs={5} md={4}>
        <TeamLogo team={homeTeam} />
      </Grid>
      <Grid item xs={2} md={1}>
        <Typography className={classes.text} variant="h5">
          vs
        </Typography>
      </Grid>
      <Grid item className={classes.griditem} xs={5} md={4}>
        <TeamLogo team={visitorTeam} />
      </Grid>
    </Grid>
  );
};

export default MatchBox;
