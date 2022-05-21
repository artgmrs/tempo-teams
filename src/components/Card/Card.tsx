import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name }: { id: string; name: string }) => {
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

export default Card;
