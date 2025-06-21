import { CAL_BASE_URL, EVENT_TYPE_ID, TOKEN_CAL } from "./config";

export async function getAvailableSlots({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  const queryParams = new URLSearchParams({
    eventTypeId: EVENT_TYPE_ID || "",
    start,
    end,
    timeZone: "America/Lima",
  });

  const res = await fetch(
    `${CAL_BASE_URL}/v2/slots?${queryParams.toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_CAL}`,
        "cal-api-version": "2024-09-04",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Error al obtener slots: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}
