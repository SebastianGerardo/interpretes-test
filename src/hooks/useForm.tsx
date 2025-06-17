"use client";
import { useState } from "react";

export const useForm = (initialState: Record<string, string>) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return {
    handleChange,
    form,
  };
};
