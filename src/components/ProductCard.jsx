import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCarrito();

  return (
    <Card
      bg="light"
      border="dark"
      text="dark"
      className="shadow rounded text-center"
      style={{ width: '16rem', minHeight: '26rem', margin: '10px' }}
    >
      <Link to={`/producto/${product.id}`}>
        <Card.Img
          variant="top"
          src={product.card_images[0]?.image_url_small}
          alt={product.name}
          style={{ height: '180px', objectFit: 'contain', padding: '10px' }}
        />
      </Link>

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold fst-italic" style={{ fontSize: '1rem' }}>
            {product.name}
          </Card.Title>
          <Card.Text className="fst-italic text-muted" style={{ fontSize: '0.9rem' }}>
            {product.type}
          </Card.Text>
        </div>
        <Button
          variant="outline-dark"
          className="shadow-sm fw-bold mt-2"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;