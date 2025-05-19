import ProductList from '../components/ProductList';
import { Spinner, Alert } from 'react-bootstrap';

const Home = ({ products, loading, error, addToCart }) => {
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="warning" />
        <p className="mt-3">Cargando cartas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center my-5">
        {error}
      </Alert>
    );
  }

  return (
    <>
      <h1 className="mb-4">Cartas destacadas</h1>
      <ProductList products={products} onAddToCart={addToCart} />
    </>
  );
};

export default Home;

