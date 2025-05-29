import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login();

    navigate('/');
  };

  return (
    <>
      <h1 className="mb-4">Iniciar sesión</h1>
      <Form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" required />
        </Form.Group>

        <Button variant="dark" type="submit">
          Ingresar
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;