// CardGrid.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';

const CardGrid = ({ cards, getRandomPrice }) => {
  return (
    <Row>
      {cards.map((card, index) => (
        <Col key={index} sm={12} md={6} lg={4} className="mb-4">
          <CardItem card={card} getRandomPrice={getRandomPrice} />
        </Col>
      ))}
    </Row>
  );
};

export default CardGrid;
