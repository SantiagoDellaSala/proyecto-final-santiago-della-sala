import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CartItem = ({ item, onRemove }) => {
  return (
    <Card className="h-100 position-relative">
      <Button
        variant="danger"
        size="sm"
        className="position-absolute top-0 end-0 m-2"
        onClick={onRemove}
      >
        ❌
      </Button>
      <Card.Img
        variant="top"
        src={item.imageUrl || (item.card_images && item.card_images[0].image_url_small)}
        alt={item.name}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text><strong>${item.price}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
