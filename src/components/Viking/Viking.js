import React from "react";
import MatchList from "../Layout/MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import logo from "../../static/viking.png";
import useAxiosFetch from "../../api/useAxiosFetch";
import { filterTeams, filterEvents } from "../../api/filterData";
import { makeStyles } from "@material-ui/styles";



const useStyles = makeStyles(theme => ({
  events: {
    // backgroundColor: "white",
  }
}));

const baseUrl = "https://vglive.no/api/vg/participants/teams/22988";

function Viking() {
  const classes = useStyles();
  const { data, isLoading, hasError, errorMessage } = useAxiosFetch(
    baseUrl,
    {}
  );

  if (hasError) return <div>{errorMessage}</div>;

  const matches = filterEvents(data.events ? Object.values(data.events) : []);
  const teamList = filterTeams(
    data.participants ? Object.values(data.participants) : []
  );

  return (
    <div className={classes.events}>
      <h1 style={{ color: "#FF6400", textAlign: "center" }}>
        <img width="200" src={logo} alt="logo" />
      </h1>
      {isLoading ? (
        <Spinner />
      ) : (
          <MatchList events={matches} teamList={teamList} />
        )}
    </div>
  );
}
export default Viking;
