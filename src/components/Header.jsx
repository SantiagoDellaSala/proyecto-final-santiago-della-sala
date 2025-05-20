import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">Tienda de Cartas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/carrito">
              Carrito{' '}
              {cartItemCount > 0 && (
                <Badge bg="warning" text="dark">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
            {!isLoggedIn ? (
              <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
            ) : (
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

