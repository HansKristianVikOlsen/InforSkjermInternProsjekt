import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TeamLogo from "./TeamLogo";
import MatchTime from "./MatchTime";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    textAlign: "center"
  },
  text: {
    color: "black",
    fontFamily: "Sanchez"
  },
  date: {
    textAlign: "left"
  },
  paper: {
    color: "#454545",
    backgroundColor: "#505050",
    textAlign: "center"
  },
  paper2: {
    backgroundColor: "#454545"
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
      justify="space-between"
      direction="row"
      spacing={3}
    >
      <Grid className={classes.date} item xs={3}>
        <Typography className={classes.text} variant="h6">
          <MatchTime date={event.startDate} />
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Paper elevation={1} className={classes.paper}>
          <TeamLogo team={homeTeam} align="left" />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.text} variant="h5">
          vs
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={1} className={classes.paper}>
          <TeamLogo team={visitorTeam} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MatchBox;
