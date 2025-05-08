import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Ofertas from './pages/Ofertas';
import Ingresar from './pages/Ingresar';
import CrearCarta from './pages/CrearCarta';
import EditarCarta from './pages/EditarCarta';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar cartas al inicio
  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
        setLoading(false);
      });
  }, []);

  const addCard = (newCard) => {
    setCards((prevCards) => [newCard, ...prevCards]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 py-4 bg-light">
        <Routes>
          <Route path="/" element={<Home cards={cards} loading={loading} addCard={addCard} />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/crear-carta" element={<CrearCarta addCard={addCard} />} />
          <Route path="/editar-carta/:id" element={<EditarCarta />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
