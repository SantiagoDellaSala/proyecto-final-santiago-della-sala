import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <>
      <h1 className="mb-4">Iniciar sesión</h1>
      <Form className="mx-auto" style={{ maxWidth: '400px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Ingresar
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
