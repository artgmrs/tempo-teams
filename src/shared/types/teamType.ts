import TeamMemberType from "./teamMemberType";

interface TeamType {
  id: string;
  name: string;
  teamLeadId?: string;
  teamMemberIds?: string[];
  teamMembers?: TeamMemberType[];
}

export default TeamType;
