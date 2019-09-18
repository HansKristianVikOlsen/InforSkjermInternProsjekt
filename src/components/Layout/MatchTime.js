import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    alignItems: "center",
    flex: "1",
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 64
  }
}));

const MatchTime = ({ date }) => {
  const classes = useStyles();
  function ConvertDateToString() {
    console.log("denne");
    console.log();

    let newDate = date.toUTCString();
    console.log(newDate);
    debugger;
    return newDate.substr(0, newDate.length - 7);
  }

  return <div> {ConvertDateToString()}</div>;
};

export default MatchTime;
