import { CAL_BASE_URL, EVENT_TYPE_ID } from "./config";

export async function getAvailableSlots(params: { startTime: string; endTime: string }) {
  const queryParams = new URLSearchParams({
    eventTypeId: EVENT_TYPE_ID || "",
    start: `${params.startTime}`,
    end: `${params.endTime}`,
    timeZone: "America/Lima",
  });

  const res = await fetch(`${CAL_BASE_URL}/slots?${queryParams.toString()}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_CAL}`,
      "cal-api-version": "2024-09-04",
    },
  });

  if (!res.ok) {
    throw new Error(`Error al obtener slots: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}