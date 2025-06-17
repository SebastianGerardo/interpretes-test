// hooks/useAvailableSlots.ts
import { useAsyncState } from "@/hooks";
import { getAvailableSlots } from "@/services/slotsService";
import { SlotsByDate } from "@/types";

export function useAvailableSlots(start: string) {
  const { isLoading, data, handleAsync } = useAsyncState<{
    data: SlotsByDate;
    status: string;
  }>();

  const fetchSlots = () => {
    return handleAsync(
      getAvailableSlots({
        startTime: start,
        endTime: start,
      })
    );
  };

  return {
    isLoading,
    data,
    fetchSlots,
  };
}
