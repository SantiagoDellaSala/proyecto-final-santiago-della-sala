import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>La Tienda</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Quiénes somos</a></li>
              <li><a href="#" className="text-light text-decoration-none">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-light text-decoration-none">Términos y condiciones</a></li>
              <li><a href="#" className="text-light text-decoration-none">Política de privacidad</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Formulario de contacto</a></li>
              <li><a href="#" className="text-light text-decoration-none">Whatsapp</a></li>
              <li><a href="#" className="text-light text-decoration-none">Instagram</a></li>
              <li><a href="#" className="text-light text-decoration-none">Facebook</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Ayuda</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Cómo comprar</a></li>
              <li><a href="#" className="text-light text-decoration-none">Métodos de pago</a></li>
              <li><a href="#" className="text-light text-decoration-none">Envíos</a></li>
              <li><a href="#" className="text-light text-decoration-none">Devoluciones</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Yu-Gi-Oh! Store. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
