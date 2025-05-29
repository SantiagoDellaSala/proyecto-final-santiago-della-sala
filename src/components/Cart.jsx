import { useCarrito } from '../context/CarritoContext';
import { Button, Table } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCarrito();

  const total = cart.reduce((sum, item) => sum + item.quantity * (item.price || 100), 0);

  if (cart.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <>
      <Table bordered hover>
        <thead className="table-dark text-center">
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody className="text-center align-middle">
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.card_images[0]?.image_url_small}
                  alt={item.name}
                  style={{ height: '60px' }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total estimado: ${total}</h4>
        <div>
          <Button variant="outline-danger" onClick={clearCart} className="me-2">
            Vaciar carrito
          </Button>
          <Button variant="success" disabled>
            Finalizar compra
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
