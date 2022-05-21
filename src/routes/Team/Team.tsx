import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "shared/store/store";
import * as TempoService from "shared/services/tempoService";
import TeamMemberType from "shared/types/teamMemberType";

const Team = () => {
  const currentTeam = useSelector((state: RootState) => state.app.currentTeam);
  const [leader, setLeader] = useState<TeamMemberType>();
  const [members, setMembers] = useState<TeamMemberType[]>([]);

  const getMembersDetails = async () => {
    if (currentTeam) {
      await currentTeam.teamMemberIds?.forEach(async (memberId) => {
        const member = await TempoService.getUser(memberId);
        setMembers((previousState) => [...previousState, member]);
      });
    }
  };

  useEffect(() => {
    async function fetchTeamDetails() {
      if (currentTeam && currentTeam.teamLeadId && currentTeam.teamMemberIds) {
        setLeader(await TempoService.getUser(currentTeam.teamLeadId));
        await getMembersDetails();
      }
    }

    fetchTeamDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTeam]);

  return (
    <>
      <h1>Nome time: {currentTeam?.name} </h1>
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

export default Team;
