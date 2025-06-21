import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAsyncState } from "./useAsyncState";
import { createBooking } from "@/services/bookings";
import { Booker, BookingResponse, Slot } from "@/types";
import { EVENT_TYPE_ID } from "@/services/config";

export const useCreateBooking = ({ action }: { action: () => void }) => {
  const { isLoading, handleAsync } = useAsyncState<{
    data: BookingResponse;
    status: string;
  }>();
  const router = useRouter();

  const handleReserve = useCallback(
    (item: Slot, attendee: Booker) => {
      return handleAsync(
        createBooking({
          eventTypeId: Number(EVENT_TYPE_ID),
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
    [action, handleAsync, router]
  );

  return { handleReserve, isLoading };
};
