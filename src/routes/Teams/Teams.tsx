import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTeams } from "shared/store/slices/appSlice";
import { RootState } from "shared/store/store";
import * as TempoService from "shared/services/tempoService";
import "./Teams.css";
import Card from "components/Card/Card";
import SearchField from "components/SearchField/SearchField";

const Teams = () => {
  const teams = useSelector((state: RootState) => state.app.teams);
  const teamsFilter = useSelector((state: RootState) => state.app.teamsFilterResult);
  const dispatch = useDispatch();
  const filterHasNoResults = teamsFilter?.length === 0;

  const getTeams = () => {
    if (teamsFilter) {
      return teamsFilter;
    }

    return teams;
  };

  useEffect(() => {
    async function fetchTeams() {
      const data = await TempoService.getTeams();
      if (data != null) {
        dispatch(setTeams(data));
      }
    }

    fetchTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchField />
      <div className="card-container">
        {filterHasNoResults && <h2>Sem resultados</h2>}
        {getTeams()?.map((team) => (
          <Card id={team.id} name={team.name} />
        ))}
      </div>
    </>
  );
};

export default Teams;
