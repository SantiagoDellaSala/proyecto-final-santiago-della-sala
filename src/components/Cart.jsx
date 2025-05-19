import { ListGroup, Button, Badge } from 'react-bootstrap';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.quantity * 100), 0);

  if (cartItems.length === 0) return <p>El carrito está vacío.</p>;

  return (
    <>
      <h2>Carrito</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div>
              {item.name} <Badge bg="secondary">x{item.quantity}</Badge>
            </div>
            <div>
              {/* Precio ficticio */}
              ${item.quantity * 100}
              <Button
                variant="outline-danger"
                size="sm"
                className="ms-3"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Eliminar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="mt-3">Total: ${total}</h4>
    </>
  );
};

export default Cart;
