import React from "react";


const MatchTime = ({ date }) => {
  function ConvertDateToString() {
    console.log("denne");
    console.log();

    let newDate = new Date(date).toUTCString();
    console.log(newDate);
    debugger;
    return newDate.substr(0, newDate.length - 7);
  }

  return <div> {ConvertDateToString()}</div>;
};

export default MatchTime;
