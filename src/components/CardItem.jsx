import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CardItem = ({ card, getRandomPrice }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const price = card.price || getRandomPrice();
    const isCustomCard = !!card.id;

    return (
        <Card className="h-100 small-card">
            <Card.Img
                variant="top"
                src={card.imageUrl || (card.card_images && card.card_images[0].image_url_small)}
                alt={card.name}
                className="small-card-img"
            />
            <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{card.name}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>
                    {card.type} <br />
                    <strong>${price}</strong>
                </Card.Text>
                <Button size="sm" variant="primary" onClick={() => addToCart({ ...card, price })}>
                    Agregar al carrito
                </Button>
                {isCustomCard && (
                    <Button
                        size="sm"
                        variant="warning"
                        className="ms-2"
                        onClick={() => navigate(`/editar-carta/${card.id}`, { state: { card } })}
                    >
                        Editar
                    </Button>
                )}
            </Card.Body>
        </Card>

    );
};

export default CardItem;
