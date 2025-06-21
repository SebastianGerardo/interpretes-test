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
    <article className="space-y-4">
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

      <div className="white-card">
        <SlotView
          isLoading={isLoading}
          data={data ?? { data: {} }}
          form={{ name: form.name, email: form.email }}
        />
      </div>
    </article>
  );
};
