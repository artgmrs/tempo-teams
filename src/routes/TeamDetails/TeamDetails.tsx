import React, { useEffect, useState } from "react";
import * as TempoService from "shared/services/tempoService";
import TeamMemberType from "shared/types/teamMemberType";
import { useNavigate, useParams } from "react-router-dom";
import TeamType from "shared/types/teamType";
import SearchField from "components/SearchField/SearchField";
import { Button, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import GenericCard from "components/GenericCard/GenericCard";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <Button onClick={() => navigate("/")} variant="contained">
          Back
        </Button>

        {team?.name ? <h1>Team: {team?.name} </h1> : <Skeleton variant="text" />}

        {leader?.firstName ? (
          <h2>
            Leader: {leader?.firstName} {leader?.lastName}
          </h2>
        ) : (
          <Skeleton variant="text" />
        )}
      </Box>
      <SearchField
        handleChange={handleSearchFieldChange}
        label="Search member here..."
        value={searchInput}
        disabled={members.length <= 0}
      />
      <Box sx={{ display: "flex", justifyContent: "center", margin: "15px" }}>
        <h2>Members</h2>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center" }}>
        {filterHasNoResults && <h2>No results found</h2>}

        {members.length === 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center" }}>
            {[...Array(7)].map((n, index) => (
              <Skeleton key={index} variant="rectangular" width={120} height={120} />
            ))}
          </Box>
        )}

        {getMembers()?.map((member) => (
          <GenericCard
            key={member.id}
            id={member.id}
            name={`${member.firstName} ${member.lastName}`}
          />
        ))}
      </Box>
    </div>
  );
};

export default TeamDetails;
