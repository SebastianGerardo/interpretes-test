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
      <div className="flex flex-col items-center justify-center py-16">
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-blue-500/20 animate-ping"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Consultando horarios disponibles...</p>
      </div>
    );
  }

  if (!hasSlots) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">No hay horarios disponibles</h3>
        <p className="text-gray-500">
          No se encontraron slots disponibles para la fecha seleccionada. 
          <br />
          Por favor, intenta con otra fecha.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Horarios Disponibles
        </h3>
        <p className="text-gray-600">
          Selecciona el horario que mejor se adapte a tus necesidades
        </p>
      </div>

      {Object.entries(data.data).map(([date, items]) => (
        <div key={date} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">
                {new Date(date).toLocaleDateString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h4>
              <p className="text-sm text-gray-500">
                {(items as Slot[]).length} horarios disponibles
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {(items as Slot[]).map((item, index) => (
              <CardSlot
                key={index}
                item={item}
                booker={{ name: form.name, email: form.email }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
