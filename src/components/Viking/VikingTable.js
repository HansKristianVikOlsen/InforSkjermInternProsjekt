import React from "react";
import TablePage from "../Layout/TablePage";

const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1877/standings?type=live-changes";

const VikingTable = () => {
  return <TablePage url={tableUrl} />;
};

export default VikingTable;
