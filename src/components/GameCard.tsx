import React from "react";
import { Game } from "../types";
import { NavLink } from "react-router-dom";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): React.ReactElement => {
  const { id, title, thumbnail, short_description, genre } = content;

  const link = `game/${id}`;
  return (
    <NavLink to={link}>
      <img src={thumbnail} alt={`${title} logo`} />
      <h2>{title}</h2>
      <p>{short_description}</p>
      <p>{genre}</p>
    </NavLink>
  );
};

export default GameCard;
