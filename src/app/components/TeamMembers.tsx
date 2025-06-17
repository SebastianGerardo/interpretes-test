import { getAllMembers } from "@/services/membersService";
import { CardMember } from "./CardMember";
import { Member } from "@/types";

export const TeamMembers = async () => {
  const members = await getAllMembers();

  return (
    <div className="flex gap-x-4 justify-between max-w-xl mx-auto mb-4 sticky top-2">
      {members?.data &&
        members?.data?.length > 0 &&
        members?.data?.map((member: Member) => (
          <CardMember key={member.id} member={member} />
        ))}
    </div>
  );
};
