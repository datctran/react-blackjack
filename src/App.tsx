import React, { useState } from 'react';
import './App.css';
import { GameHelper } from './modules/game-engine/rules';
import PlayingCard from './ui/card/card';
import { Card } from './modules/game-engine/models/card.enum';

function App() {
  const deck: Card[] = GameHelper.shuffleDeck(GameHelper.generateDeck());
  const [userCards, setUserCards] = useState([deck.pop(), deck.pop()]);
  const [dealerCards, setDealerCards] = useState([deck.pop(), deck.pop()]);

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
        <button>Hit</button>
        <button>Stay</button>
        <button>Play Again</button>
      </div>
    </div>
  );
}

export default App;
