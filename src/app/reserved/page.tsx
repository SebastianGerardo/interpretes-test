// import Image from "next/image";
import { formatDate, formatHours } from "@/utils";
import { Check } from "lucide-react";
import Image from "next/image";
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
    <div className="flex justify-center">
      <div className="bg-white rounded-lg p-4 max-w-xl">
        <div className="relative min-w-32 min-h-24 mx-auto h-24 w-32 mb-4">
          <picture className="block w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
            <Image
              src={"/avatar.png"}
              alt="Reserved"
              width={100}
              height={100}
            />
          </picture>
          <div className="mx-auto flex items-center justify-center rounded-full absolute bottom-0 right-0 z-10 h-12 w-12 border-8 border-white bg-green-600 text-green-300">
            <Check className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-1">
            La reunión ha sido reservada
          </h1>
          <p className="text-sm text-gray-500">
            {name} te reunirás con {host}
            <br />
            el día {formatDate(new Date(start))} desde las{" "}
            {formatHours(new Date(start))} hasta las{" "}
            {formatHours(new Date(end))}
            <br />
            Para más información, revisa el correo electrónico que te enviamos.
          </p>
        </div>
      </div>
    </div>
  );
}
