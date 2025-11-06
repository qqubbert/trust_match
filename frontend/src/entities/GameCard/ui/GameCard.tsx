import { type FC } from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

import type { GameType } from "@shared/types/GameType";

import { allPageLinks } from "@shared/config/pageLinks";

// import Menu from '@icons/Menu/DotsMenu.svg?react';

type GameCardProps = {
  game: GameType;
};

export const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Link
      to={allPageLinks.singleGame.link(Array.from(String(game.id)))}
      className="game-card"
    >
      <div className="icon-container">
        <img src={game.gameIcon} alt={game.title} />
      </div>
      <span>{game.title}</span>
    </Link>
  );
};
