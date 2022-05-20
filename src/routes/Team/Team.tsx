import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "shared/store/store";

const Team = () => {
  const currentTeam = useSelector((state: RootState) => state.app.currentTeam);
  return (
    <>
      <h1>Nome time: {currentTeam?.name}</h1>
      <h4>Usuarios</h4>
      {currentTeam?.teamMemberIds?.map((x) => {
        <div key={x}>{x}</div>;
      })}
    </>
  );
};

export default Team;
