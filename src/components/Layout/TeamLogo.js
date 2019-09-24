import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  icon: {
    height: "50px",
    width: "50px",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Sanchez",
    textAlign: "left",
  },
  grid: {
    alignItems: "center",
    padding: 20,
  },
  paper: {
    backgroundColor: "#656565",
  },
}));

const TeamLogo = ({ team }) => {
  const classes = useStyles();
  return (
    <Paper elevation={6} className={classes.paper} >
      <Grid container className={classes.grid}>
        <Grid item xs sm md lg className={classes.griditem}>
          <img
            className={classes.icon}
            src={team ? team.imageUrl : ""}
            alt="logo"
          />
        </Grid>
        <Hidden smDown>
          <Grid item md lg className={classes.griditem}>
            <Typography className={classes.text} variant="subtitle1">
              {team ? team.name : "unknown"}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );
};



export default withWidth()(TeamLogo);
