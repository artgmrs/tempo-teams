import { Button } from "@mui/material";
import React from "react";

interface CardProps {
  id: string;
  name: string;
  handleCardClick?: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, name, handleCardClick }) => {
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
          handleCardClick && handleCardClick(id);
        }}
        color="primary"
      >
        <span>{name}</span>
      </Button>
    </div>
  );
};

export default Card;
