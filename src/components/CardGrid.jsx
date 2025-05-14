import React from 'react';
import CardItem from './CardItem';
import '../styles/index.css';
const CardGrid = ({ cards, getRandomPrice }) => {
  return (
    <div className="custom-grid">
      {cards.map((card, index) => (
        <div key={index} className="grid-item">
          <CardItem card={card} getRandomPrice={getRandomPrice} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
