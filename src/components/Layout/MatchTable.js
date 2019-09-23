import React from "react";
import TableBox from "./TableBox";

function MatchTable({ tableStandings, tableParticipants }) {
  console.log(tableStandings);
  console.log(tableParticipants);

  // const [firstRow, setFirstRow] = useState(true);

  // const getTeamByKey = key => {
  //   let team = Object.values(teamList).find(team => team.id === key);
  //   return team || {};
  // };
  return (
    <div>
      {tableStandings && tableParticipants
        ? Object.keys(tableStandings).map(key => {
            return (
              <>
                {console.log("---1")}
                {console.log(tableStandings[key].teamStandings)}
                {console.log("---2")}
                {tableStandings && tableParticipants ? (
                  <TableBox
                    team={tableStandings[key].teamStandings}
                    participant={tableParticipants}
                  />
                ) : null}
              </>
            );
          })
        : null}
    </div>
  );
}
/*

 return (
    <div>
      {table && teamList
        ? Object.keys(table).map(key => {
            return (
              <>
                {table[key].teamStandings.map(team => {

                  
                  return (

                   
                    
                    <>
                      {teamList.participants ? (
                        <>
                        <TableBox
                          team={team}
                          participant={teamList.participants[team.teamId]}
                          firstrow = {firstRow}
                        />
                        {setFirstRow(false)} </>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </>
              
            );
          })
        : null}
        
    </div>
  );
}























<TableBox team={team} participant={teamList.participants[team.teamId]}/>

<li>
                      
                      {teamList.participants
                        ? teamList.participants[team.teamId].name
                        : ""}
                    </li>
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
*/
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
