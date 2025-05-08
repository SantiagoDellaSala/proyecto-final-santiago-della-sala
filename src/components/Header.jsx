import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { cartItems } = useCart();
  const { isLoggedIn, userEmail, logout } = useAuth();
  const itemCount = cartItems.length;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Yu-Gi-Oh! Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
            {!isLoggedIn ? (
              <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
            ) : (
              <>
                <span className="text-white">Hola, {userEmail}</span>
                <Button size="sm" variant="outline-light" onClick={logout}>
                  Cerrar sesión
                </Button>
              </>
            )}
            <Nav.Link as={Link} to="/carrito" className="position-relative">
              <FaShoppingCart size={20} />
              {itemCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                  {itemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
