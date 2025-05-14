import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CardItem.css'; // Importa el archivo de estilos

const CardItem = ({ card, getRandomPrice }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const price = card.price || getRandomPrice();
    const isCustomCard = !!card.id;

    return (
        <Card className="card-item h-100 shadow-lg rounded">
            <Card.Img
                variant="top"
                src={card.imageUrl || (card.card_images && card.card_images[0].image_url_small)}
                alt={card.name}
                className="card-item-img rounded-top"
            />
            <Card.Body className="text-center">
                <Card.Title className="card-item-title">{card.name}</Card.Title>
                <Card.Text className="card-item-type">
                    {card.type} <br />
                    <strong className="price">${price}</strong>
                </Card.Text>
                <div className="d-flex flex-column gap-2 mt-3">
                    <Button
                        size="sm"
                        variant="primary"
                        className="add-to-cart-btn"
                        onClick={() => addToCart({ ...card, price })}
                    >
                        Agregar al carrito
                    </Button>

                    {isCustomCard && (
                        <Button
                            size="sm"
                            variant="warning"
                            className="edit-btn"
                            onClick={() => navigate(`/editar-carta/${card.id}`, { state: { card } })}
                        >
                            Editar
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardItem;
