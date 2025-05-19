import ProductCard from './ProductCard';
import { Row, Col } from 'react-bootstrap';

const ProductList = ({ products, onAddToCart }) => (
  <Row className="g-4">
    {products.map(product => (
      <Col key={product.id} xs={12} sm={6} lg={4}>
        <ProductCard product={product} onAddToCart={onAddToCart} />
      </Col>
    ))}
  </Row>
);

export default ProductList;