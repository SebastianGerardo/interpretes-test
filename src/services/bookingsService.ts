import { BookingPayload, BookingResponse } from "@/types";
import { CAL_BASE_URL } from "./config";

export async function reserveBooking(payload: BookingPayload): Promise<{ data: BookingResponse; status: string }> {
  const res = await fetch(`${CAL_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_CAL}`,
      "cal-api-version": "2024-08-13",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Error al obtener slots: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}
