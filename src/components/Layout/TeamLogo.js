import React from "react";
import Typography from "@material-ui/core/Typography";
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
    color: "black",
    fontSize: "22px",
    fontFamily: "Sanchez",
    textAlign: "left",
  },
  grid: {
    alignItems: "center",
    padding: "20px",

  },
}));

const TeamLogo = ({ team }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs sm md={4} lg={4} className={classes.griditem}>
        <img
          className={classes.icon}
          src={team ? team.imageUrl : ""}
          alt="logo"
        />
      </Grid>
      <Hidden smDown>
        <Grid item md={8} lg={8} className={classes.griditem}>
          <Typography className={classes.text} noWrap variant="subtitle1">
            {team ? team.name : "unknown"}
          </Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
};



export default withWidth()(TeamLogo);
