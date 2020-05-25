import React from "react";
import "./Card.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <div>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="monster"
        />
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    </div>
  );
};

export default Card;
