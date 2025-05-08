import React, { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';

const NuevaCarta = ({ addCard }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && imageUrl && price && type) {
      addCard({ name, imageUrl, price, type });
      setName('');
      setImageUrl('');
      setPrice('');
      setType('');
    } else {
      alert('Por favor complete todos los campos');
    }
  };

  return (
    <div className="my-4">
      <h3>Agregar Nueva Carta</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formCardName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la carta"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCardImage">
              <Form.Label>Imagen URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL de la imagen"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formCardPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCardType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipo (Ej: Monster, Spell)"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Agregar Carta
        </Button>
      </Form>
    </div>
  );
};

export default NuevaCarta;
