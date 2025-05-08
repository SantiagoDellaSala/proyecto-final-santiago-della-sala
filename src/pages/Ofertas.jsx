import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

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

  const getPrices = () => {
    const original = (Math.random() * (12 - 5) + 5).toFixed(2);
    const discount = (original * 0.7).toFixed(2); // 30% off
    return { original, discount };
  };

  return (
    <div className="container">
      <h2 className="mb-4">Ofertas especiales</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {cards.map((card) => {
            const { original, discount } = getPrices();
            return (
              <Col key={card.id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={card.card_images[0].image_url_small} alt={card.name} />
                  <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                      <span style={{ color: 'red', textDecoration: 'line-through' }}>
                        ${original}
                      </span>
                      <br />
                      <span style={{ color: 'green', fontSize: '1.25rem', fontWeight: 'bold' }}>
                        ${discount}
                      </span>
                    </Card.Text>
                    <Button variant="success" onClick={() => addToCart({ ...card, price: discount })}>
                      Agregar al carrito
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Ofertas;
