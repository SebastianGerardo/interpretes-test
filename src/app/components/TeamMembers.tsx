import { getTeamsMemberships } from "@/services/members";
import { CardMember } from "./CardMember";
import { Member } from "@/types";

export const TeamMembers = async () => {
  const members = await getTeamsMemberships();

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Nuestro Equipo
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Profesionales especializados en interpretación listos para ayudarte
        </p>
      </div>
      
      <div className="relative">
        <div className="flex gap-4 justify-center flex-wrap max-w-4xl mx-auto">
          {members?.data &&
            members?.data?.length > 0 &&
            members?.data?.map((member: Member) => (
              <CardMember key={member.id} member={member} />
            ))}
        </div>
      </div>
    </div>
  );
};
