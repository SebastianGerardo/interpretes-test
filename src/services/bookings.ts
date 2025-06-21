import { BookingPayload, BookingResponse } from "@/types";
import { CAL_BASE_URL, TOKEN_CAL } from "./config";

export async function createBooking(payload: BookingPayload): Promise<{ data: BookingResponse; status: string }> {
  const res = await fetch(`${CAL_BASE_URL}/v2/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN_CAL}`,
      "cal-api-version": "2024-08-13",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Error al crear reserva: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}
