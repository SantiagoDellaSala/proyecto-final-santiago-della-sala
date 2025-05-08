import React, { useState } from 'react';
import { Row, Col, Card, Button, Spinner, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = ({ cards, loading, addCard, updateCard }) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [attributeFilter, setAttributeFilter] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const getRandomPrice = () => {
    return (Math.random() * (10 - 2) + 2).toFixed(2);
  };

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

  const isCustomCard = (card) => !!card.id; // Las cartas personalizadas tienen id

  return (
    <div className="container">
      <h2 className="mb-4">Cartas destacadas</h2>

      <Form className="mb-4">
        <Row className="align-items-end">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Buscar por nombre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="">Todos los tipos</option>
              {uniqueTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select value={attributeFilter} onChange={(e) => setAttributeFilter(e.target.value)}>
              <option value="">Todos los atributos</option>
              {uniqueAttributes.map((attr, idx) => (
                <option key={idx} value={attr}>
                  {attr}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <div className="text-end mt-2">
          <Button variant="secondary" size="sm" onClick={clearFilters}>
            Limpiar filtros
          </Button>
        </div>
      </Form>

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
          <Row>
            {visibleCards.map((card, index) => {
              const price = card.price || getRandomPrice();
              return (
                <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={card.imageUrl || (card.card_images && card.card_images[0].image_url_small)}
                      alt={card.name}
                    />

                    <Card.Body>
                      <Card.Title>{card.name}</Card.Title>
                      <Card.Text>
                        {card.type} <br />
                        <strong>${price}</strong>
                      </Card.Text>
                      <Button variant="primary" onClick={() => addToCart({ ...card, price })}>
                        Agregar al carrito
                      </Button>
                      {isCustomCard(card) && (
                        <Button
                          variant="warning"
                          className="ms-2"
                          onClick={() => navigate(`/editar-carta/${card.id}`, { state: { card } })}
                        >
                          Editar
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

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
