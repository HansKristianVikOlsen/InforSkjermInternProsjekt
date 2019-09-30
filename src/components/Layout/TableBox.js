import React from "react";
import { Box, Paper, Table, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";


const normalSize = 21;
const fontFamily = "'Source Sans Pro', sans-serif";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    textAlign: "left",
    color: "white",
    fontFamily: fontFamily,
    fontSize: normalSize,
    minHeight: "60px",
    marginLeft: "15px"
  },
  avatar: {
    backgroundColor: "green"
  },

  fab: {},
  paper: {
    backgroundColor: "black"
  },
  griddiv: {
    alignItems: "center",
    textAlign: "left",
    color: "white",
    fontFamily: fontFamily,
    fontSize: normalSize,
    marginTop: "15px",
    marginLeft: "15px"
  },
  griditem: {
    minHeight: "50px"
  }

}));

const TableBox = ({ team, participant }) => {
  const classes = useStyles();
  const numberOfParticipants = team.length;

  const getTeamById = id => {
    let team = participant.find(team => team.id === id);
    return team || {};
  };

  function highLightTeam(teamId) {
    const teamName = getTeamById(teamId).name;
    if (teamName === "Viking" || teamName === "Stavanger Oilers") {
      return (
        <>
          <b>{teamName}</b>
        </>
      );
    } else {
      return <>{teamName}</>;
    }
  }

  function placeHiglighter(rank) {
    return (
      <>
        <Avatar
          style={{
            backgroundColor: fadeColorByRank(rank),
            color: "black",
            width: "33px",
            height: "33px"
          }}
        >
          {rank}
        </Avatar>
      </>
    );
  }

  function fadeColorByRank(rank) {
    //RGB
    let step = 255 / (numberOfParticipants / 2);
    let r = 0;
    let g = 255;
    let b = 0;
    if (rank <= numberOfParticipants / 2) {
      r = Math.round(step * (rank - 1));
    } else {
      r = 255;
      g = Math.round(255 - step * (rank - 1) + 255);
    }
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container direction="row" className={classes.root}>
          <Grid item xs sm md lg>
            <Grid container lg md xs >
              <Grid item xs={3}>Plassering</Grid>
              <Grid item xs={6}>Lag</Grid>
              <Grid item xs={3}>Antall kamper</Grid>
            </Grid>
          </Grid>

          <Grid item></Grid>
          <Grid container lg md sm xs >
            <Grid item xs={2}>V</Grid>
            <Grid item xs={2}>U</Grid>
            <Grid item xs={2}>T</Grid>
            <Grid item xs={3}>Mål</Grid>
            <Grid item xs={3}>Poeng</Grid>
          </Grid>
        </Grid>

      </Paper>
      <Grid container direction="row" alignItems="stretch" className={classes.griddiv} >
        <Grid item xs md lg>
          {
            team.map(team => (
              <Grid container key={team.teamId} xs md lg spacing={2}>
                <Grid className={classes.griditem} item xs={3}>{placeHiglighter(team.rank)}</Grid>
                <Grid className={classes.griditem} item xs={6}>
                  <Box>
                    <img
                      src={participant ? getTeamById(team.teamId).imageUrl : ""}
                      alt="logo"
                      height="20px"
                      width="20px"
                      style={{ paddingRight: "10px" }}
                    /> &nbsp;
  
                {highLightTeam(team.teamId)}
                  </Box>
                </Grid>
                <Grid className={classes.griditem} item xs={3}>{team.played}</Grid>
              </Grid>
            ))
          }
        </Grid>
        <Grid item xs md lg margin="30px">
          {
            team.map(team => (
              <Grid container key={team.teamId} xs md lg spacing={2}>
                <Grid className={classes.griditem} item xs={2} style={{ color: "lightgreen" }}>{team.wins}</Grid>
                <Grid className={classes.griditem} item xs={2} style={{ color: "yellow" }}>{team.draws}</Grid>
                <Grid className={classes.griditem} item xs={2} style={{ color: "red" }}>{team.losses}</Grid>
                <Grid className={classes.griditem} item xs={3}>{team.goals.forGoals} - {team.goals.againstGoals}</Grid>
                <Grid className={classes.griditem} item xs={3}>{team.points}</Grid>
              </Grid>))
          }
        </Grid>
      </Grid>
    </>
  )
}


export default TableBox;
