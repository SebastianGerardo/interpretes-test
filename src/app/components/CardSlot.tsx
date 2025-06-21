import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Slot } from "@/types";
import { formatHours } from "@/utils";
import { useState } from "react";
import { useCreateBooking } from "@/hooks/useCreateBooking";
import { Clock } from "lucide-react";

export const CardSlot = ({
  item,
  booker,
}: {
  item: Slot;
  booker: { name: string; email: string };
}) => {
  const [open, setOpen] = useState(false);
  const { handleReserve, isLoading } = useCreateBooking({
    action: () => setOpen(false),
  });

  return (
    <AlertDialog
      open={open}
      onOpenChange={(value) => {
        if (!isLoading) setOpen(value);
      }}
    >
      <AlertDialogTrigger asChild>
        <button
          className="group relative bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
          onClick={() => setOpen(true)}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 rounded-2xl transition-all duration-300"></div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-1">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {formatHours(new Date(item.start))}
            </span>
            <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              Disponible
            </span>
          </div>
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-lg border-0 shadow-2xl">
        <AlertDialogHeader className="text-center">
          <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mx-auto">
            <Clock size={32} />
          </div>
          <AlertDialogTitle className="font-light text-center text-gray-600 text-lg">
            ¿Deseas confirmar esta reserva?
          </AlertDialogTitle>
          <div className="w-12 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto"></div>
        </AlertDialogHeader>

        <AlertDialogDescription className="text-center space-y-6 py-4">
          <div className="bg-gray-50 rounded-xl p-6 space-y-4 text-left">
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">Horario</span>
              <span className="text-sm font-semibold text-gray-800">
                {formatHours(new Date(item.start))}
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">Cliente</span>
              <span className="text-sm font-semibold text-gray-800">
                {booker.name}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-500">Email</span>
              <span className="text-sm font-semibold text-gray-800">
                {booker.email}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Recibirás un email de confirmación una vez completada la reserva.
          </p>
        </AlertDialogDescription>

        <AlertDialogFooter className="flex gap-3 pt-6">
          <AlertDialogCancel
            onClick={() => {
              if (!isLoading) setOpen(false);
            }}
            disabled={isLoading}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 font-medium py-3 transition-colors duration-200"
          >
            Cancelar
          </AlertDialogCancel>
          <Button
            disabled={isLoading}
            onClick={() =>
              handleReserve(item, {
                name: booker.name,
                email: booker.email,
                timeZone: "America/Lima",
              })
            }
            className="flex-1 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium py-3 shadow-sm hover:shadow-md transition-all duration-200"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Procesando...</span>
              </div>
            ) : (
              <span>Confirmar Reserva</span>
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
