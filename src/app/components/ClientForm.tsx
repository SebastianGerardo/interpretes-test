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
    <div className="mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-light text-gray-800 mb-3">
            Programa tu consulta
          </h2>
          <p className="text-gray-600 text-lg">
            Completa tus datos para encontrar horarios disponibles
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-8 space-y-6">
              {/* Form fields with better distribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="Nombre completo"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>
                
                <div>
                  <Input
                    label="Correo electrónico"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
                  <Input
                    label="Fecha de consulta"
                    type="date"
                    name="start"
                    value={form.start}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                  />
              

                
                <div>
                  <button
                    disabled={isLoading || !form.start || !form.name || !form.email}
                    type="submit"
                    className="w-full h-12 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Buscando...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>Buscar Horarios</span>
                      </>
                    )}
                  </button>

              </div>
            </div>
            
            {/* Subtle footer */}
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                Selecciona una fecha para ver los horarios disponibles
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
