import React from "react";

function MatchTable(props) {
  console.log(props.table.standings);
  const table = props.table.standings;
  //const standings = props.matches.standings.teamStandings;
  //const participants = props.matches.participants;

  /*
  return (
    <div>
      {props.table.standings
        ? Object.keys(table).map(key => {
            return (
              
                <table>
                    <thead>
                        <th>Plassering</th>
                        <th>Lag</th>
                    </thead>
                  {table[key].teamStandings.map(team => {
                    return (
                      <>
                      <tr>
                          {team.rank}
                      </tr>
                      <tr>
                      {props.table.participants[team.teamId].name}
                      <img
                          src={
                            props.table.participants[team.teamId].images
                              .clubLogo.url + "?rule=clip-56x56"
                          }
                          alt="fotball"
                        />

                      </tr>
                        
                      </>
                    );
                  })}
                
            
            );
          })
        : null}
        </table>
    </div>
  );
*/
  return (
    <div>
      {props.table.standings
        ? Object.keys(table).map(key => {
            return (
              <>
                <ol>
                  {table[key].teamStandings.map(team => {
                    return (
                      <>
                        <li>{props.table.participants[team.teamId].name}</li>
                        <img
                          src={
                            props.table.participants[team.teamId].images
                              .clubLogo.url + "?rule=clip-56x56"
                          }
                          alt="fotball"
                        />
                      </>
                    );
                  })}
                </ol>
              </>
            );
          })
        : null}
    </div>
  );

  return (
    <table>
      <thead>
        <th>Rank</th>
        <th>Lag</th>
      </thead>
      <tbody>
        {table
          ? table.map(table => {
              return (
                <tr>
                  <td>{table.rank}</td>
                  <td>{table.teamId}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}

/*

 {props.matches.standings
          ? Object.keys(standings).map(key => {
              return (
                <tr>
                  <td>{standings[key].rank}</td>
                  <td>{standings[key].teamId}</td>
                </tr>
              );
            })
          : null}
          
          */
export default MatchTable;
