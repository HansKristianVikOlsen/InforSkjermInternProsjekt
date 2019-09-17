import React from "react";
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
    color: "#FF6400"
  }
}));

const MatchCard = ({ event, table }) => {
  const classes = useStyles();

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
        event={event}
        table={table.participants}
      />
      <Typography className={classes.text} component="h5" variant="h5">
        -
      </Typography>
      <TeamLogo justifyContent="flex-start" event={event} table={table} />
    </Box>
  );
};

export default MatchCard;
