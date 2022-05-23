import React, { useEffect, useState } from "react";
import * as TempoService from "shared/services/tempoService";
import TeamMemberType from "shared/types/teamMemberType";
import { useNavigate, useParams } from "react-router-dom";
import TeamType from "shared/types/teamType";
import SearchField from "components/SearchField/SearchField";

const TeamDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState<TeamType>();
  const [leader, setLeader] = useState<TeamMemberType>();
  const [members, setMembers] = useState<TeamMemberType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [membersFilter, setMembersFilter] = useState<TeamMemberType[] | null>();
  const filterHasNoResults = membersFilter?.length === 0;

  useEffect(() => {
    async function fetchTeamMemberIds() {
      if (id) setTeam(await TempoService.getTeam(id));
    }

    fetchTeamMemberIds();
  }, []);

  useEffect(() => {
    async function fetchMerbersData() {
      let leaderPromise;

      if (team?.teamLeadId && team?.teamMemberIds) {
        leaderPromise = TempoService.getUser(team?.teamLeadId);

        const members: TeamMemberType[] = await Promise.all(
          team?.teamMemberIds?.map(async (id) => TempoService.getUser(id)),
        );

        setLeader(await leaderPromise);
        setMembers(members);
      }
    }

    fetchMerbersData();
  }, [team]);

  const getMembers = () => {
    if (membersFilter) return membersFilter;

    return members;
  };

  const handleSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    const textSearch = e.target.value.toLowerCase();

    if (textSearch.length > 0) {
      const searchResult = members.filter((member) => {
        return member.firstName.toLowerCase().match(searchInput.toLowerCase());
      });

      setMembersFilter(searchResult);
    } else if (textSearch.length === 0) {
      setMembersFilter(null);
    }
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <h1>Team: {team?.name} </h1>
      <h2>Leader: {leader?.firstName}</h2>
      <h4>Members:</h4>
      <SearchField
        handleChange={handleSearchFieldChange}
        placeholder="Search member here..."
        value={searchInput}
      />
      <div>
        {filterHasNoResults && <h2>No results found</h2>}
        {getMembers()?.map((member) => (
          <h5 key={member.id}>{member.firstName}</h5>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
