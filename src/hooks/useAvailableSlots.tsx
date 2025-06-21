// hooks/useAvailableSlots.ts
import { useAsyncState } from "@/hooks";
import { getAvailableSlots } from "@/services/slots";
import { SlotsByDate } from "@/types";

export function useAvailableSlots(start: string, end: string) {
  const { isLoading, data, handleAsync } = useAsyncState<{
    data: SlotsByDate;
    status: string;
  }>();

  const fetchSlots = () => {
    return handleAsync(
      getAvailableSlots({
        start,
        end,
      })
    );
  };

  return {
    isLoading,
    data,
    fetchSlots,
  };
}
