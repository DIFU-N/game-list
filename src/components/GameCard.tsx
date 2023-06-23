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
    <NavLink to={link} className={'inline-block border-2 border-blue-900 my-3 transition-all duration-200 ease-in-out lg:hover:scale-105 w-full rounded-md no-underline'}>
      <img src={thumbnail} alt={`${title} logo`} className="w-full" />
      <div className="p-5 md:whitespace-nowrap">
        <h2 className="m-0 text-2xl font-medium  md:overflow-hidden md:text-ellipsis">{title}</h2>
        <p className="text-xs md:overflow-hidden md:text-ellipsis">{short_description}</p>
        <p className="py-1 my-2 px-2 mr-[24px] text-white float-right rounded text-xs font-bold bg-gray-800 md:even:mr-0 lg:nth-child(3n+3):mr-0 lg:even:mr-[24px]">{genre}</p>
      </div>
    </NavLink>
  );
};

export default GameCard;
