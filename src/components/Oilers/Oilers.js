import React from "react";
import MatchList from "../Layout/MatchList";
import Spinner from "../../common/Spinner";
import "../../common/Spinner.css";
import "../Layout/MatchPage.css";
import useAxiosFetch from "../../api/useAxiosFetch"
import { filterTeams, filterEvents } from "../../api/filterData"


const baseUrl = "https://vglive.no/api/vg/participants/teams/48876";


function Oilers() {
  const {
    data,
    isLoading,
    hasError,
    errorMessage
  } = useAxiosFetch(baseUrl, {});

  if (hasError) return (
    <div>{errorMessage}</div>
  );

  const matches = filterEvents(data.events ? Object.values(data.events) : []);
  const teamList = filterTeams(data.participants ? Object.values(data.participants) : []);

  return (
    <>
      <h1 style={{ color: "#FF6400", textAlign: "center" }}>
        <img
          width="200"
          src="http://www.oilers.no/wp-content/uploads/oilers-logo.svg"
          alt="logo"
        />
      </h1>
      {isLoading ? (
        <Spinner />
      ) : (
          <MatchList events={matches} teamList={teamList} />
        )}
    </>
  );
}
export default Oilers;
