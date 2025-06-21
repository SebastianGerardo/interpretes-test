"use client";
import { Input } from "@/app/ui";
import { toast } from "sonner";

export const ClientForm = ({
  form,
  handleChange,
  fetchSlots,
  isLoading,
}: {
  form: { name: string; email: string; start: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchSlots: () => Promise<void>;
  isLoading: boolean;
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.promise(fetchSlots(), {
      loading: "Consultando slots...",
      success: () => {
        return `Slots consultados correctamente`;
      },
      error: "Error al consultar slots",
    });
  };
  

  return (
    <form
      className="flex flex-col gap-y-2 max-w-md mx-auto shadow-md p-4 rounded-md bg-white"
      onSubmit={handleSubmit}
    >
      <Input
        label="Nombres completos *"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Correo *"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        label="Fecha de consulta *"
        type="date"
        name="start"
        value={form.start}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
      />
      <button
        disabled={isLoading || !form.start || !form.name || !form.email}
        type="submit"
        className="bg-blue-500 disabled:bg-blue-300 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600"
      >
        Consultar
      </button>
    </form>
  );
};
