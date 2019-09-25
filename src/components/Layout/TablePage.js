import React from "react";
import Spinner from "../../common/Spinner";
import MatchTable from "../Layout/MatchTable";
import useAxiosFetch from "../../api/useAxiosFetch";
import { filterStandings, filterParticipants } from "../../api/filterData";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  table: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
    // backgroundColor: "#454545",
  }
}));

const TablePage = ({ url }) => {
  const classes = useStyles();
  const { data, isLoading, hasError, errorMessage } = useAxiosFetch(url, {});
  if (hasError) return <div>{errorMessage}</div>;

  const tableStandings = data.standings
    ? filterStandings(data.standings[0])
    : [];
  const tableParticipants = data.participants
    ? filterParticipants(Object.values(data.participants))
    : [];

  return (
    <div className={classes.table}>
      {isLoading ? (
        <Spinner />
      ) : (
        <MatchTable
          tableStandings={tableStandings}
          tableParticipants={tableParticipants}
        />
      )}
    </div>
  );
};

export default TablePage;
