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

const TeamLogo = ({ justifyContent, event, table }) => {
  const classes = useStyles();
  console.log(table);
  return (
    <Box className={classes.content} justifyContent={justifyContent}>
      <Typography className={classes.text} variant="subtitle1">
        {justifyContent === "flex-end"
          ? table[event.participantIds[0]].name
          : event.participantIds[1]}
      </Typography>
    </Box>
  );
};
/* <img
        className={classes.icon}
        src={
          justifyContent === "flex-end"
            ? table.participants[event.participantIds[0]].images.clubLogo.url +
              "?rule=clip-56x56"
            : table.participants[event.participantIds[1]].images.clubLogo.url +
              "?rule=clip-56x56"
        }
        alt="bilde"
      />*/
export default TeamLogo;
