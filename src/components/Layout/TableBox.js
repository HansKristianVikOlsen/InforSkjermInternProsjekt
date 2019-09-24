import React from "react";
import { Paper, Table } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const normalSize = 25;

const StyledTableCell = withStyles(theme => ({
  head: {
    width: 50
  },
  body: {
    fontSize: normalSize
  }
}))(TableCell);

const Cell = withStyles(theme => ({
  head: {
    fontSize: normalSize
  },
  body: {
    fontSize: normalSize
  }
}))(TableCell);

const CellHead = withStyles(theme => ({
  head: {
    fontSize: normalSize,
    color: "white"
  },
  body: {
    fontSize: normalSize
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#eeeeee"
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#ffffff"
    }
  }
}))(TableRow);

const StyledTableRowHead = withStyles(theme => ({
  root: {
    backgroundColor: "#111111",
    color: "white"
  },
  body: {}
}))(TableRow);

const StyledTableCellWin = withStyles(theme => ({
  head: {
    backgroundColor: "green",
    color: theme.palette.common.white,
    width: 10,
    fontSize: normalSize
  },
  body: {}
}))(TableCell);

const StyledTableCellDraw = withStyles(theme => ({
  head: {
    backgroundColor: "yellow",
    color: theme.palette.common.black,
    width: 10,
    fontSize: normalSize
  },
  body: {}
}))(TableCell);

const StyledTableCellLoss = withStyles(theme => ({
  head: {
    backgroundColor: "red",
    color: theme.palette.common.white,
    width: 10,
    fontSize: normalSize
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    textAlign: "center",
    color: "white",
    margin: 50,
    height: 500
  },
  avatar: {
    backgroundColor: "green"
  },

  text: {
    color: "white"
  },

  table: {},

  tablehead: {
    color: "black"
  },
  fab: {}
}));

const TableBox = ({ team, participant }) => {
  const classes = useStyles();
  const numberOfParticipants = team.length;
  console.log(numberOfParticipants);

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

  function firstPlaceHiglighter(rank) {
    return (
      <>
        <Avatar
          style={{ backgroundColor: fadeColorByRank(rank), color: "black" }}
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
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead className={classes.tablehead}>
          <StyledTableRowHead>
            <CellHead align="left">Plassering</CellHead>
            <CellHead align="left">Lag</CellHead>
            <CellHead align="right">Kamper spilt</CellHead>
            <CellHead align="right">V</CellHead>
            <CellHead align="right">U</CellHead>
            <CellHead align="right">T</CellHead>
            <CellHead align="right">Mål</CellHead>
            <CellHead align="right">Poeng</CellHead>
          </StyledTableRowHead>
        </TableHead>
        <TableBody>
          {team.map(team => (
            <StyledTableRow key={team.teamId}>
              <Cell align="left">
                <Avatar>{firstPlaceHiglighter(team.rank)}</Avatar>
              </Cell>
              <Cell align="left">{highLightTeam(team.teamId)}</Cell>
              <Cell align="right">{team.played}</Cell>
              <Cell style={{ color: "green", width: 5 }} align="right">
                {team.wins}
              </Cell>
              <Cell style={{ width: 5 }} align="right">
                {team.draws}
              </Cell>
              <Cell style={{ color: "red", width: 5 }} align="right">
                {team.losses}
              </Cell>
              <Cell style={{ width: 150 }} align="right">
                {team.goals.forGoals} - {team.goals.againstGoals}{" "}
              </Cell>

              <Cell style={{ width: 100 }} align="right">
                {team.points}
              </Cell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TableBox;

/*
<Avatar className={classes.avatar}>{team.rank}</Avatar>
<Fab
                  elevation={0}
                  size="small"
                  aria-label=""
                  className={classes.fab}
                  color="grey"
                >
                  {team.rank}
                </Fab>

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


                {getTeamById(team.teamId).name === "Viking" ||
                getTeamById(team.teamId).name === "Stavanger Oilers" ? (
                  <>
                    {" "}
                    <b>{getTeamById(team.teamId).name}</b>{" "}
                  </>
                ) : (
                  getTeamById(team.teamId).name
                )}
    */
