import React from 'react';
import { Card } from '../../modules/game-engine/models/card.enum';
import './card.css';

export interface PlayingCardProps {
  card: Card;
}

function PlayingCard({ card }: PlayingCardProps) {
  return (
    <div className="playing-card">
      <div>{card.icon} {card.suit}</div>
    </div>
  );
}

export default PlayingCard;
