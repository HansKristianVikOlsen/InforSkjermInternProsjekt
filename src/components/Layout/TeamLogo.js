import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    alignItems: "center",
    flex: "auto",
    marginRight: 50,
    marginLeft: 50
  },
  icon: {
    height: 50,
    width: 50,
    padding: 20
  },
  text: {
    color: "white"
  }
}));

const TeamLogo = ({ team }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <img
        className={classes.icon}
        src={team ? team.imageUrl : ""}
        alt="logo"
      />
      <Typography className={classes.text} variant="subtitle1">
        {team ? team.name : "unknown"}
      </Typography>
    </Box>
  );
};
export default TeamLogo;
