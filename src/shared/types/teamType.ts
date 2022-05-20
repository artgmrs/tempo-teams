import TeamMemberType from "./teamMemberType";

interface TeamType {
  id: number;
  name: string;
  teamLeadId?: number;
  teamMemberIds?: number[];
  teamMembers?: TeamMemberType[];
}

export default TeamType;
