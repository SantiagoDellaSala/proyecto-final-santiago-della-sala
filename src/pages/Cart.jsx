import React from 'react';
import { useCart } from '../context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  return (
    <Container>
      <h2 className="my-4">Tu carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="h-100 position-relative">
                  <Button
                    variant="danger"
                    size="sm"
                    className="position-absolute top-0 end-0 m-2"
                    onClick={() => removeFromCart(index)}
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
              </Col>
            ))}
          </Row>
          <h4 className="mt-4">Total: ${total}</h4>
        </>
      )}
    </Container>
  );
};

export default Cart;
