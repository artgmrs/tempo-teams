import React, { useEffect, useState } from "react";
import * as TempoService from "shared/services/tempoService";
import TeamMemberType from "shared/types/teamMemberType";
import { useParams } from "react-router-dom";
import TeamType from "shared/types/teamType";

const TeamDetails = () => {
  let { id } = useParams();
  const [team, setTeam] = useState<TeamType>();
  const [leader, setLeader] = useState<TeamMemberType>();
  const [members, setMembers] = useState<TeamMemberType[]>([]);

  useEffect(() => {
    async function fetchTeamDetails() {
      if (id) {
        setTeam(await TempoService.getTeam(id));
      }
    }

    fetchTeamDetails();
  }, []);

  useEffect(() => {
    async function fetchLeader() {
      if (team?.teamLeadId) setLeader(await TempoService.getUser(team?.teamLeadId));
      team?.teamMemberIds?.forEach(async (memberId) => {
        const member = await TempoService.getUser(memberId);
        setMembers((previousState) => [...previousState, member]);
      });
    }

    fetchLeader();
  }, [team]);

  return (
    <>
      <h1>Nome time: {team?.name} </h1>
      <h2>
        Nome líder: {leader?.firstName} {leader?.lastName}
      </h2>
      <h4>Nome membros:</h4>
      <div>
        {members?.map((member) => (
          <h5 key={member.id}>{member.firstName}</h5>
        ))}
      </div>
    </>
  );
};

export default TeamDetails;
