import React, { useState, useEffect } from 'react';
import {useLocation  , useNavigate } from 'react-router-dom';
import '../game2/Game_2.css';
// import './Game_5.css'
const Game_2 = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()
  const {level} = location.state
  let arr;
  const [score ,setScore] = useState(0);
  if(level == 1){
    arr = ["fox", "fox", "lion", "lion", "monkey", "monkey", "panda", "panda", "tiger", "tiger"];
  }
  else if(level == 2){
    arr = ["fox", "fox", "lion", "lion", "monkey", "monkey", "panda", "panda", "tiger", "tiger"]
  }
  else{
    arr = ["fox", "fox", "lion", "lion", "monkey", "monkey", "panda", "panda", "tiger", "tiger", "tiger", "tiger", "panda", "panda"]
  }

  
  // Shuffle the cards
  useEffect(() => {
    const shuffledCards = arr
      .map((card, index) => ({ id: index, value: card, flipped: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);
  
  const handleCardClick = (index) => {
    setScore(parseInt(score) + 1)
    if (isDisabled || flipped.length === 2 || cards[index].flipped || matched.includes(index)) return;
    
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsDisabled(true);

      setTimeout(() => {
        const [first, second] = newFlipped;
        if (cards[first].value === cards[second].value) {
          setMatched((prevMatched) => [...prevMatched, first, second]);
        } else {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards(newCards);
        }
        setFlipped([]);
        setIsDisabled(false);
      }, 800);
    }
  };

  useEffect(() => {
    if (matched.length === cards.length && matched.length != 0) {
      navigate("/Result",{state:{gamenumber:2,message: score,leveled : level }})
    }
  }, [matched, cards.length]);

  return (
    <div className='game5-area'>
      <h1><span>Flips : {score}</span></h1>
      <div className="box">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`container ${card.flipped || matched.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card">
              <div className="front"></div>
              <div
                className="back"
                style={{ background: `url(./${card.value}.png) no-repeat`, backgroundSize: 'cover' }}
              >
                {card.flipped || matched.includes(index) ? '' : card.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game_2;
