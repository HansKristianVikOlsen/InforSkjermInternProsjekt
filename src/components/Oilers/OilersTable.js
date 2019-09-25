import React from "react";
import TablePage from "../Layout/TablePage";

const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1947/standings?type=live-changes";

const OilersTable = () => {
  return <TablePage url={tableUrl} />;
};

export default OilersTable;
