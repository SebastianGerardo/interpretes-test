"use client";

import { useAvailableSlots, useForm } from "@/hooks";
import { SlotView } from "./SlotsContainer";
import { ClientForm } from "./ClientForm";

export const Booking = () => {
  const { form, handleChange } = useForm({
    name: "",
    email: "",
    start: "",
  });

  const { isLoading, data, fetchSlots } = useAvailableSlots(form.start, form.start);

  return (
    <div className="space-y-8">
      <ClientForm
        form={{
          name: form.name || "",
          email: form.email || "",
          start: form.start || "",
        }}
        handleChange={handleChange}
        fetchSlots={async () => {
          await fetchSlots();
        }}
        isLoading={isLoading}
      />

      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20">
        <SlotView
          isLoading={isLoading}
          data={data ?? { data: {} }}
          form={{ name: form.name, email: form.email }}
        />
      </div>
    </div>
  );
};
