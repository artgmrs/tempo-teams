import { Button } from "@mui/material";
import React from "react";

interface TeamCardProps {
  id: string;
  name: string;
  handleTeamCardClick: (id: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name, handleTeamCardClick }) => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "4px",
        }}
        onClick={() => {
          handleTeamCardClick(id);
        }}
        color="primary"
      >
        <span>{name}</span>
      </Button>
    </div>
  );
};

export default TeamCard;
