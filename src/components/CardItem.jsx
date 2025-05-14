import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/index.css';

const CardItem = ({ card, getRandomPrice }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const price = card.price || getRandomPrice();
    const isCustomCard = !!card.id;

    return (
        <div className="card-item-wrapper">
            <Card className="card-item">
                <Card.Img
                    variant="top"
                    src={card.imageUrl || (card.card_images && card.card_images[0].image_url_small)}
                    alt={card.name}
                    className="card-item-img"
                />
                <Card.Body className="card-body-custom">
                    <Card.Title className="card-item-title">{card.name}</Card.Title>
                    <Card.Text className="card-item-type">
                        {card.type} <br />
                        <strong className="price">${price}</strong>
                    </Card.Text>
                    <div className="button-group">
                        <Button
                            size="sm"
                            className="add-to-cart-btn"
                            onClick={() => addToCart({ ...card, price })}
                        >
                            Agregar al carrito
                        </Button>

                        {isCustomCard && (
                            <Button
                                size="sm"
                                className="edit-btn"
                                onClick={() => navigate(`/editar-carta/${card.id}`, { state: { card } })}
                            >
                                Editar
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardItem;
