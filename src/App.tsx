import React, { useState } from 'react';
import './App.css';
import { GameHelper } from './modules/game-engine/rules';
import PlayingCard from './ui/card/card';
import { Card } from './modules/game-engine/models/card.enum';

function App() {
  const deck: Card[] = GameHelper.shuffleDeck(GameHelper.generateDeck());
  const [userCards, setUserCards] = useState([deck.pop(), deck.pop()]);
  const [dealerCards, setDealerCards] = useState([deck.pop(), deck.pop()]);

  const onHit = () => {
    const userCardValue = userCards.reduce((acc, curr) => {
      const lowerValue = curr?.values.sort((a, b) => a - b)[0] ?? 0;
      return acc + lowerValue;
    }, 0);

    if (userCardValue > 21) return;

    setUserCards([...userCards, deck.pop()]);
  };
  const onStay = () => { };
  const onPlayAgain = () => { };

  return (
    <div className="App">
      <div>
        Dealer Cards
        <div>
          {dealerCards.map(card => card ? <PlayingCard card={card}></PlayingCard> : '')}
        </div>
      </div>
      <div>
        Player Cards
        <div>
          {userCards.map(card => card ? <PlayingCard card={card}></PlayingCard> : '')}
        </div>
      </div>
      <div>
        <button onClick={onHit}>Hit</button>
        <button onClick={onStay}>Stay</button>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default App;
