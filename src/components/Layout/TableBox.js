import React from "react";
import { Paper, Table } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

const normalSize = 20;

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
    width: 50,
    fontSize: normalSize
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
    color: "white"
  },

  text: {
    color: "white"
  },

  table: {},
  tablehead: {
    color: "white"
  }
}));

const TableBox = ({ team, participant }) => {
  const classes = useStyles();
  console.log("222");
  console.log(team);
  console.log(participant);
  console.log(participant[2].name);

  const getTeamById = id => {
    let team = participant.find(team => team.id === id);
    return team || {};
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead className={classes.tablehead}>
          <TableRow>
            <Cell align="left">Plassering</Cell>
            <Cell align="left">Lag</Cell>
            <Cell align="right">Kamper spilt</Cell>
            <StyledTableCellWin align="right">Vinn</StyledTableCellWin>
            <StyledTableCellDraw align="right">Uavgjort</StyledTableCellDraw>
            <StyledTableCellLoss align="right">Tap</StyledTableCellLoss>
            <StyledTableCell align="right">Mål</StyledTableCell>
            <StyledTableCell align="right">Poeng</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {team.map(team => (
            <StyledTableRow key={team.rank}>
              <Cell align="left">{team.rank}</Cell>
              <Cell align="left">
                {getTeamById(team.teamId).name === "Viking" ||
                getTeamById(team.teamId).name === "Stavanger Oilers" ? (
                  <>
                    {" "}
                    <b>{getTeamById(team.teamId).name}</b>{" "}
                  </>
                ) : (
                  getTeamById(team.teamId).name
                )}
              </Cell>
              <Cell align="right">{team.played}</Cell>
              <Cell align="right">{team.wins}</Cell>
              <Cell align="right">{team.draws}</Cell>
              <Cell align="right">{team.losses}</Cell>
              <Cell align="right">
                {team.goals.for} - {team.goals.against}{" "}
              </Cell>

              <Cell align="right">{team.points}</Cell>
            </StyledTableRow>
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
