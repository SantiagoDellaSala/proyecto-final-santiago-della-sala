import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
        setError('Error al cargar los datos de cartas. Intenta nuevamente más tarde.');
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
        {/* Pasa el estado de error a AppRoutes */}
        <AppRoutes cards={cards} loading={loading} addCard={addCard} error={error} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
