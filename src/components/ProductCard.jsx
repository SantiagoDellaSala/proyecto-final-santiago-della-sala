import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => (
  <Card
    bg="warning"
    border="dark"
    text="dark"
    className="shadow rounded"
  >
<Link to={`/producto/${product.id}`}>
  <Card.Img src={product.card_images[0]?.image_url_small} />
</Link>

    <Card.Body>
      <Card.Title className="fw-bold fst-italic">{product.name}</Card.Title>
      <Card.Text className="fst-italic">{product.type}</Card.Text>
      <Button
        variant="outline-dark"
        className="shadow-sm fw-bold"
        onClick={() => onAddToCart(product)}
      >
        Agregar al carrito
      </Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
