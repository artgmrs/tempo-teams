import React from "react";
import "./TeamCard.css";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ id, name }: { id: string; name: string }) => {
  let navigate = useNavigate();

  const handleClick = async (id: string) => {
    navigate(`/teams/${id}`);
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

export default TeamCard;
