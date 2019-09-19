import React from "react";

const MatchTime = ({ date }) => {
  function ConvertDateToString() {
    let newDate = new Date(date);

    let options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };

    return newDate.toLocaleDateString("nb-NB", options);
  }

  return <div>{ConvertDateToString()}</div>;
};

export default MatchTime;
