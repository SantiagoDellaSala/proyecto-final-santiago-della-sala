import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1 className="mb-4">Bienvenido a GuanteX</h1>
        <ProductList onAddToCart={addToCart} />
        <Cart cartItems={cart} />
      </main>
      <Footer />
    </>
  );
}

export default App;
