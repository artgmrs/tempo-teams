import React from "react";
import "./TeamCard.css";

interface TeamCardProps {
  id: string;
  name: string;
  handleTeamCardClick: (id: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name, handleTeamCardClick }) => {
  return (
    <div className="card">
      <button
        type="button"
        onClick={() => {
          handleTeamCardClick(id);
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default TeamCard;
