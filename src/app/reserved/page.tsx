// import Image from "next/image";
import { formatDate, formatHours } from "@/utils";
import { Check, Calendar, Clock, User, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ReservedPage({
  searchParams,
}: {
  searchParams: Promise<{
    name: string;
    host: string;
    start: string;
    end: string;
  }>;
}) {
  const { name, host, start, end } = await searchParams;

  if (!name || !host || !start || !end) {
    return redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100">
              <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                <Image
                  src="/avatar.png"
                  alt="Reserva confirmada"
                  width={48}
                  height={48}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-light text-gray-800 mb-3">
            Reserva Confirmada
          </h1>
          <p className="text-lg text-gray-600">
            Tu cita ha sido programada exitósamente
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-4"></div>
        </div>

        {/* Reservation Details Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">Detalles de la Reserva</h2>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="min-w-12 min-h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Cliente</p>
                  <p className="text-lg font-semibold text-gray-800">{name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="min-w-12 min-h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Intérprete</p>
                  <p className="text-lg font-semibold text-gray-800">{host}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="min-w-12 min-h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Fecha</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatDate(new Date(start))}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="min-w-12 min-h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Horario</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatHours(new Date(start))} - {formatHours(new Date(end))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Próximos Pasos</h3>
          </div>
          
          <div className="space-y-3 text-gray-600">
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Recibirás un email de confirmación con todos los detalles</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Se enviará un enlace de videollamada 15 minutos antes de la cita</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Si necesitas cancelar o reprogramar, contacta al intérprete directamente</span>
            </p>
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
