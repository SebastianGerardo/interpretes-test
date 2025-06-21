import { CAL_BASE_URL, TEAM_ID, TOKEN_CAL } from "./config";

export async function getTeamsMemberships() {
  const res = await fetch(`${CAL_BASE_URL}/v2/teams/${TEAM_ID}/memberships`, {
    headers: {
      'Authorization': `Bearer ${TOKEN_CAL}`
    }
  });

  if (!res.ok) {
    throw new Error(`Error al obtener slots: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}
