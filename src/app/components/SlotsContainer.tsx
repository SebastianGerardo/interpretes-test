import { Slot, SlotsByDate } from "@/types";
import { CardSlot } from "./CardSlot";
import { Loader2 } from "lucide-react";

export const SlotView = ({
  isLoading,
  data,
  form,
}: {
  isLoading: boolean;
  data: { data: SlotsByDate };
  form: { name: string; email: string };
}) => {
  const hasSlots = data?.data && Object.keys(data.data).length > 0;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  if (!hasSlots) {
    return (
      <p className="text-center text-gray-500">
        No hay slots disponibles para la fecha seleccionada
      </p>
    );
  }

  return Object.entries(data.data).map(([date, items]) => (
    <div key={date}>
      <h2 className="font-bold text-lg mb-2">
        Horarios disponibles para {date}
      </h2>
      <ul className="space-y-1 grid grid-cols-2 gap-x-2 gap-y-1">
        {(items as Slot[]).map((item, index) => (
          <CardSlot
            key={index}
            item={item}
            booker={{ name: form.name, email: form.email }}
          />
        ))}
      </ul>
    </div>
  ));
};
