import React from "react";
import { Grid, Paper, Table } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    textAlign: "center"
  },
  text: {
    color: "white"
  },

  paper: {
    color: "white",
    backgroundColor: "black",
    textAlign: "center"
  },
  paper2: {
    backgroundColor: "#454545"
  },
  table: {
    height: 1000,
    cell: 10,
    margin: 0
  },
  tablehead: {},

  classLeft: {
    float: "left"
  },
  classRight: {
    float: "left"
  },
  icon: {
    height: 5,
    width: 5,
    padding: 0
  },
  viking: {
    color: "green"
  }
}));

const TableBox = ({ team, participant }) => {
  const classes = makeStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead className={classes.tablehead}>
          <TableRow>
            <TableCell align="left">Plassering</TableCell>
            <TableCell align="left">Lag</TableCell>
            <TableCell align="right">Kamper spilt</TableCell>
            <TableCell align="right">Vinn</TableCell>
            <TableCell align="right">Uavgjort</TableCell>
            <TableCell align="right">Tap</TableCell>
            <TableCell align="right">Poeng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {team.map(team => (
            <TableRow key={team.rank}>
              <TableCell align="left">{team.rank}</TableCell>
              <TableCell align="left">
                {participant[team.teamId].name === "Viking" ||
                participant[team.teamId].name === "Stavanger Oilers" ? (
                  <>
                    {" "}
                    <b>{participant[team.teamId].name}</b>{" "}
                  </>
                ) : (
                  participant[team.teamId].name
                )}
              </TableCell>
              <TableCell align="right">{team.played}</TableCell>
              <TableCell align="right">{team.wins}</TableCell>
              <TableCell align="right">{team.draws}</TableCell>
              <TableCell align="right">{team.losses}</TableCell>
              <TableCell align="right">{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableBox;

/*
<Grid container className={classes.root} spacing={2}>
      <Grid item>{team.rank}</Grid>
      <Grid item>{participant.name}</Grid>
      <Grid item>{participant.name}</Grid>
    </Grid>


    <img
                  className={classes.icon}
                  src={
                    participant[team.teamId].images
                      ? participant[team.teamId].images.clubLogo.url +
                        "?rule=clip-56x56"
                      : ""
                  }
                  alt="logo"
                />
    */
