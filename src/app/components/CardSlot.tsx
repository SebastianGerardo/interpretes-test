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
        <li
          className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => setOpen(true)}
        >
          {formatHours(new Date(item.start))}
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Estás seguro de querer reservar este horario?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no puede ser deshecha.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              if (!isLoading) setOpen(false);
            }}
            disabled={isLoading}
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
          >
            {isLoading ? "Reservando..." : "Reservar"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
