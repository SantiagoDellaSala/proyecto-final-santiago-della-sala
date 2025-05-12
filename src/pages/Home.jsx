import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardFilters from '../components/CardFilters';
import CardGrid from '../components/CardGrid';

const Home = ({ cards, loading }) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [attributeFilter, setAttributeFilter] = useState('');

  // Función para obtener un precio aleatorio
  const getRandomPrice = () => (Math.random() * (10 - 2) + 2).toFixed(2);

  // Filtrar las cartas con base en los filtros
  const filteredCards = cards.filter((card) => {
    const matchesName = card.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter ? card.type === typeFilter : true;
    const matchesAttribute = attributeFilter ? card.attribute === attributeFilter : true;
    return matchesName && matchesType && matchesAttribute;
  });

  const visibleCards = filteredCards.slice(0, visibleCount);
  const uniqueTypes = [...new Set(cards.map((card) => card.type).filter(Boolean))];
  const uniqueAttributes = [...new Set(cards.map((card) => card.attribute).filter(Boolean))];

  const clearFilters = () => {
    setSearch('');
    setTypeFilter('');
    setAttributeFilter('');
  };

  return (
    <div className="container">
      <h2 className="mb-4">Cartas destacadas</h2>

      <CardFilters
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        attributeFilter={attributeFilter}
        setAttributeFilter={setAttributeFilter}
        uniqueTypes={uniqueTypes}
        uniqueAttributes={uniqueAttributes}
        clearFilters={clearFilters}
      />

      <div className="text-end my-3">
        <Link to="/crear-carta">
          <Button variant="success">Agregar Nueva Carta</Button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <CardGrid cards={visibleCards} getRandomPrice={getRandomPrice} />

          {visibleCount < filteredCards.length && (
            <div className="text-center my-4">
              <Button onClick={() => setVisibleCount(visibleCount + 12)}>Ver más</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
