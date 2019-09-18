import React from "react";


const MatchTime = ({ date }) => {
  function ConvertDateToString() {

    let newDate = new Date(date).toUTCString();
    return newDate.substr(0, newDate.length - 7);
  }

  return <div>{ConvertDateToString()}</div>;
};

export default MatchTime;
