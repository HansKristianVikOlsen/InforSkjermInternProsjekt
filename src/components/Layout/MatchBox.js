import React, { useState, useEffect } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TeamLogo from "./TeamLogo";
import MatchTime from "./MatchTime";

const useStyles = makeStyles(theme => ({
  root: {
    alignContent: "center"
  },
  box: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#454545"
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  paper: {
    color: "white",
    backgroundColor: "black",
    textAlign: "center"
  },
  paper2: {
    backgroundColor: "#454545"
  }
}));

const MatchCard = ({ event, teamList }) => {
  const [homeTeam, setHomeTeam] = useState({});
  const [visitorTeam, setVisitorTeam] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const getTeamByKey = key => {
      let team = Object.values(teamList).find(team => team.id === key);
      return team || {};
    };
    setHomeTeam(getTeamByKey(event.participantIds[0]));
    setVisitorTeam(getTeamByKey(event.participantIds[1]));
  }, [event.participantIds, teamList]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          {" "}
          <MatchTime date={new Date(event.startDate)} />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <TeamLogo justifyContent="flex-start" team={homeTeam} />
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Box className={classes.box}>
          <p>vs</p>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <TeamLogo justifyContent="flex-start" team={visitorTeam} />
        </Paper>
      </Grid>
    </Grid>
  );

  // return (
  //   <Box className={classes.box} border={1} borderColor="white">
  //     <Typography
  //       className={classes.text}
  //       component="h5"
  //       variant="h5"
  //       style={{ marginLeft: 50 }}
  //     >
  //       {event.startDate}
  //     </Typography>
  //     <Typography className={classes.text} justifyContent="flex-end" component="h5" variant="h5">
  //       -
  //     </Typography>
  //
  //   </Box>
  // );
};

export default MatchCard;
