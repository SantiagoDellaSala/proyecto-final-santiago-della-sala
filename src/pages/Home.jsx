import ProductList from '../components/ProductList';

const Home = ({ onAddToCart }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros productos</h2>
      <ProductList onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;
