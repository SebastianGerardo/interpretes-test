import { Toaster } from "sonner";
import { Booking } from "./components/Booking";
import { TeamMembers } from "./components/TeamMembers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Toaster position="top-center" richColors />
      
      {/* Simple Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-800 mb-4">
              Servicio de Intérpretes
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conecta con profesionales especializados para tus necesidades de interpretación
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mt-6"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <TeamMembers />
          <Booking />
        </div>
      </div>
    </div>
  );
}
