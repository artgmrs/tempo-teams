import React from "react";
import "./Card.css"

const Card = ({ id, name }: { id: number; name: string }) => {
    return (
      <div className="card">
        <span>{name}</span>
      </div>
    );
};

export default Card;
