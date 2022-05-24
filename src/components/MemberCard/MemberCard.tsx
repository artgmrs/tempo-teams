import React from "react";
import TeamMemberType from "shared/types/teamMemberType";

interface MemberCardProps {
  member: TeamMemberType;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="member-card-container">
      <div>
        <span>Name:</span>
        <span>
          {member.firstName} {member.lastName}
        </span>
      </div>
      <div>
        <span>Location: </span>
        <span>{member.location}</span>
      </div>
    </div>
  );
};

export default MemberCard;
