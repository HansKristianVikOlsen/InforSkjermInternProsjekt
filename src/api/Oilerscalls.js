const baseUrl = "https://vglive.no/api/vg/participants/teams/48876";
const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1947/standings?type=live-changes";

export function getNextMatches() {
  return fetch(baseUrl).then(res => res.json());
}
export function getTableData() {
  return fetch(tableUrl).then(res => res.json());
}
