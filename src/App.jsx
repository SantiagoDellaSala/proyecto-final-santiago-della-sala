import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { CarritoProvider, useCarrito } from './context/CarritoContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart } = useCarrito();

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=0')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <main className="container my-4">
        <AppRoutes products={products} loading={loading} error={error} />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <CarritoProvider>
      <AppContent />
    </CarritoProvider>
  );
}

export default App;
