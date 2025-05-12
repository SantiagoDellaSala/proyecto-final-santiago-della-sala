import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import CardGrid from '../components/CardGrid'; // Asegúrate de importar CardGrid

const Ofertas = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=9&offset=20')
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching offer cards:', error);
        setLoading(false);
      });
  }, []);

  // Función para obtener precios con descuento
  const getPrices = (card) => {
    const original = (Math.random() * (12 - 5) + 5).toFixed(2); // Precio original aleatorio
    const discount = (original * 0.7).toFixed(2); // 30% de descuento
    return discount; // Solo devolvemos el precio con descuento
  };

  return (
    <div className="container">
      <h2 className="mb-4">Ofertas especiales</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <CardGrid cards={cards} getRandomPrice={getPrices} />
      )}
    </div>
  );
};

export default Ofertas;
