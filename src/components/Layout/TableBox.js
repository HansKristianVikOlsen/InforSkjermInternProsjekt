import React from "react";
import { Grid, Paper, Table } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles(theme => ({
  head: {
    width: 50
  },
  body: {
    fontSize: 14
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
    width: 10
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableCellDraw = withStyles(theme => ({
  head: {
    backgroundColor: "yellow",
    color: theme.palette.common.black,
    width: 10
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableCellLoss = withStyles(theme => ({
  head: {
    backgroundColor: "red",
    color: theme.palette.common.white,
    width: 10
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

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead className={classes.tablehead}>
          <TableRow>
            <TableCell align="left">Plassering</TableCell>
            <TableCell align="left">Lag</TableCell>
            <TableCell align="right">Kamper spilt</TableCell>
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
              <TableCell align="right">
                {team.goals.for} - {team.goals.against}{" "}
              </TableCell>

              <TableCell align="right">{team.points}</TableCell>
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
