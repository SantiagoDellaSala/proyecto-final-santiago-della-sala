import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductList = ({ onAddToCart, products }) => {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} lg={4}>
          <Card
            bg="light"
            border="dark"
            text="dark"
            className="shadow rounded"
          >
            <Card.Img
              variant="top"
              src={product.card_images[0]?.image_url_small}
              alt={product.name}
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
            <Card.Body>
              <Card.Title className="fw-bold fst-italic">
                {product.name}
              </Card.Title>
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
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
