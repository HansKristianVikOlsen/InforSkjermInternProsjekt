import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TeamLogo from "./TeamLogo";

const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    color: "white"
  }
}));

const MatchCard = ({ event, teamList }) => {
  const [homeTeam, setHomeTeam] = useState({});
  const [visitorTeam, setVisitorTeam] = useState({});

  const classes = useStyles();


  useEffect(() => {
    const getTeamByKey = (key) => {
      let team = Object.values(teamList).find(team => team.id === key);
      // console.log(team);
      return (team || {});
    }
    setHomeTeam(getTeamByKey(event.participantIds[0]))
    setVisitorTeam(getTeamByKey(event.participantIds[1]))
  }, [event.participantIds, teamList])

  return (
    <Box className={classes.box} border={1} borderColor="white">
      <Typography
        className={classes.text}
        component="h5"
        variant="h5"
        style={{ marginLeft: 50 }}
      >
        {event.startDate}
      </Typography>
      <TeamLogo
        justifyContent="flex-end"
        team={homeTeam}
      />
      <Typography className={classes.text} component="h5" variant="h5">
        -
      </Typography>
      <TeamLogo justifyContent="flex-start" team={visitorTeam} />
    </Box>
  );
};

export default MatchCard;
