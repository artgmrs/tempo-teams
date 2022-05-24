import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTeams } from "shared/store/slices/appSlice";
import { RootState } from "shared/store/store";
import * as TempoService from "shared/services/tempoService";
import SearchField from "components/SearchField/SearchField";
import TeamType from "shared/types/teamType";
import TeamCard from "components/TeamCard/TeamCard";
import { useNavigate } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";

const TeamsOverview = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const teams = useSelector((state: RootState) => state.app.teams);
  const [teamsFilter, setTeamsFilter] = useState<TeamType[] | null>();
  const filterHasNoResults = teamsFilter?.length === 0;
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchTeams() {
      const data = await TempoService.getTeams();

      if (data && data !== teams) dispatch(setTeams(data));
    }

    fetchTeams();
  }, []);

  const getTeams = () => {
    if (teamsFilter) return teamsFilter;

    return teams;
  };

  const handleSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    const textSearch = e.target.value.toLowerCase();

    if (textSearch.length > 0) {
      const searchResult = teams.filter((team) => {
        return team.name.toLowerCase().match(searchInput.toLowerCase());
      });

      setTeamsFilter(searchResult);
    } else if (textSearch.length === 0) {
      setTeamsFilter(null);
    }
  };

  const handleTeamCardClick = async (id: string) => {
    navigate(`/teams/${id}`);
  };

  return (
    <>
      <SearchField
        handleChange={handleSearchFieldChange}
        label="Search team here..."
        value={searchInput}
        disabled={teams.length <= 0}
      />
      {teams.length > 0 ? (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center" }}>
          {filterHasNoResults && <h2>No results found</h2>}
          {getTeams()?.map((team) => (
            <TeamCard
              key={team.id}
              id={team.id}
              name={team.name}
              handleTeamCardClick={handleTeamCardClick}
            />
          ))}
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center" }}>
          {[...Array(30)].map((elem, index) => (
            <Skeleton variant="rectangular" width={120} height={120} />
          ))}
        </Box>
      )}
    </>
  );
};

export default TeamsOverview;
