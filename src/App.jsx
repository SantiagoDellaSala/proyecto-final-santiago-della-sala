import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data.data.slice(0, 20));
        setLoading(false);
      })
      .catch(() => {
        setError('Error cargando cartas, intente luego.');
        setLoading(false);
      });
  }, []);

  // Añade producto al carrito, aumentando cantidad si ya existe
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((p) => p.id === product.id);
      if (productIndex !== -1) {
        const newCart = [...prevCart];
        newCart[productIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Elimina producto completo del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
  };

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1 className="mb-4">Cartas destacadas</h1>

        {loading && <p>Cargando cartas...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && (
          <ProductList products={products} onAddToCart={addToCart} />
        )}

        <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
      </main>
      <Footer />
    </>
  );
}

export default App;
