import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { EVENT_TYPE_ID } from "@/services/config";
import { useAsyncState } from "./useAsyncState";
import { reserveBooking } from "@/services/bookingsService";
import { Booker, BookingResponse, Slot } from "@/types";

export const useReserveBooking = ({ action }: { action: () => void }) => {
  const { isLoading, handleAsync } = useAsyncState<{
    data: BookingResponse;
    status: string;
  }>();
  const router = useRouter();
  const eventTypeId = Number(EVENT_TYPE_ID);

  const handleReserve = useCallback(
    (item: Slot, attendee: Booker) => {
      return handleAsync(
        reserveBooking({
          eventTypeId,
          start: item.start,
          attendee,
        })
      )
        .then((result) => {
          if (!result) throw new Error("Reserva fallida");
          action();
          const { data } = result;
          const params = new URLSearchParams({
            name: data.attendees[0].name,
            host: data.hosts[0].name,
            start: String(data.start),
            end: String(data.end),
          });
          router.push(`/reserved?${params.toString()}`);
          return result;
        })
        .catch((error) => {
          throw error;
        });
    },
    [action, handleAsync, router, eventTypeId]
  );

  return { handleReserve, isLoading };
};
