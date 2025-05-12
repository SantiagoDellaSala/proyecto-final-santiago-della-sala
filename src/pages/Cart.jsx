import React from 'react';
import { useCart } from '../context/CartContext';
import { Container, Row, Col } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';

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
                <CartItem item={item} onRemove={() => removeFromCart(index)} />
              </Col>
            ))}
          </Row>
          <CartTotal total={total} />
        </>
      )}
    </Container>
  );
};

export default Cart;