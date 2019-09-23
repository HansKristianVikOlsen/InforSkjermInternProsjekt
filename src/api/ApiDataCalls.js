

export function getTableData(tableUrl) {
  return fetch(tableUrl).then(res => res.json());
}


export function getMatchesAndTeams(baseUrl) {
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      let events = [];
      let teams = [];

      events = Object.values(data.events).map(event => ({
        id: event.id,
        startDate: new Date(event.startDate),
        homeTeam: event.participantIds[0],
        visitorTeam: event.participantIds[1]
      }));

      events = events.sort((event1, event2) => event1.startDate > event2.startDate);

      teams = Object.values(data.participants)
        .filter(part => part.type === "team")
        .map(team => ({
          id: team.id,
          name: team.name,
          imageUrl: team.images.clubLogo.url + "?rule=clip-112x112"
        }));

      return { events, teams };
    })
    .catch(error => {
      console.log(error)
    })
}