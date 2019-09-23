export const filterTeams = data => {
  return data
    ? data
        .filter(part => part.type === "team")
        .map(team => ({
          id: team.id,
          name: team.name,
          imageUrl: team.images.clubLogo.url + "?rule=clip-112x112"
        }))
    : [];
};

export const filterEvents = data => {
  return data
    ? data
        .map(event => ({
          id: event.id,
          startDate: new Date(event.startDate),
          homeTeam: event.participantIds[0],
          visitorTeam: event.participantIds[1]
        }))
        .sort((e1, e2) => e1.startDate > e2.startDate)
    : [];
};

export const filterStandings = data => {
  return data
    ? data
        .filter(part => part.type === "team")
        .map(team => ({
          id: team.id,
          name: team.name,
          imageUrl: team.images.clubLogo.url + "?rule=clip-112x112"
        }))
    : [];
};

export const filterParticipants = data => {
  return data
    ? data
        .map(event => ({
          id: event.id,
          startDate: new Date(event.startDate),
          homeTeam: event.participantIds[0],
          visitorTeam: event.participantIds[1]
        }))
        .sort((e1, e2) => e1.startDate > e2.startDate)
    : [];
};
