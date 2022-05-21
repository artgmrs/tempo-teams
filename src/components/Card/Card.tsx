import React from "react";
import "./Card.css";
import * as TempoService from "shared/services/tempoService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentTeam } from "shared/store/slices/appSlice";

const Card = ({ id, name }: { id: string; name: string }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (id: string) => {
    navigate("/team");
    const team = await TempoService.getTeam(id);
    dispatch(setCurrentTeam(team));
  };

  return (
    <div className="card">
      <button
        type="button"
        onClick={() => {
          handleClick(id);
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Card;
