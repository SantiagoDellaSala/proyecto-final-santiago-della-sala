import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener productos desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0');
        const data = await res.json();
        setProducts(data.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al cargar los productos.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Agregar producto al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Calcular la cantidad total de productos
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="container my-4">
        <AppRoutes
          products={products}
          loading={loading}
          error={error}
          addToCart={addToCart}
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
