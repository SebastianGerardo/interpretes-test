import { Member } from "@/types";
import Image from "next/image";

export const CardMember = ({ member }: { member: Member }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20 min-w-[280px] max-w-[320px]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src={
                    member.user.avatarUrl.includes("/api/avatar")
                      ? `https://cal.com${member.user.avatarUrl}`
                      : member.user.avatarUrl
                  }
                  alt={member.user.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm">
              <div className="w-full h-full rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-300">
              {member.user.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-green-100 text-green-700 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Disponible
              </span>
            </div>
          </div>
        </div>
        
        {/* Additional info */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Intérprete Profesional</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Horarios flexibles</span>
          </div>
        </div>
      </div>
    </div>
  );
};
