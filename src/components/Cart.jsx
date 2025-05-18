// src/components/Cart.jsx
import { ListGroup, Container } from 'react-bootstrap';

const Cart = ({ cartItems }) => {
  return (
    <Container className="mt-4">
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - ${item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;
