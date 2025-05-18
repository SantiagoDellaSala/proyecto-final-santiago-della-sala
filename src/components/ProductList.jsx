import { Card, Button, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: "Guante deportivo X1",
    image: "/images/guante1.jpg",
    price: 15000,
    description: "Guante de alto rendimiento para entrenamiento.",
  },
  {
    id: 2,
    name: "Guante Pro Y2",
    image: "/images/guante2.jpg",
    price: 22000,
    description: "Modelo profesional con refuerzo en palma.",
  },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} lg={4}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text><strong>${product.price}</strong></Card.Text>
              <Button variant="primary" onClick={() => onAddToCart(product)}>
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
