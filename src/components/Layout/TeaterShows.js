import React from "react";

const TeaterShows = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          width: "935px",
          height: "572px",
          overflow: "hidden"
        }}
      >
        <iframe
          style={{ marginTop: "-324px", marginLeft: "-214px" }}
          src="https://www.rogaland-teater.no/program"
          title="Rogaland Teater"
          width="2000px"
          height="1000px"
        ></iframe>
      </div>
    </>
  );
};

export default TeaterShows;
