import { Toaster } from "sonner";
import { Booking } from "./components/Booking";
import { TeamMembers } from "./components/TeamMembers";

export default function Home() {
  return (
    <div>
      <Toaster position="top-center" richColors />
      <h1 className="text-center text-2xl font-bold mb-2">
        Servicio de intérpretes
      </h1>
      <TeamMembers />
      <Booking />
    </div>
  );
}
