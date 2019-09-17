const baseUrl = "https://vglive.no/api/vg/participants/teams/22988";
export function getNextMatches() {
  return fetch(baseUrl).then(res => res.json());
}
