import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const CardFilters = ({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  attributeFilter,
  setAttributeFilter,
  uniqueTypes,
  uniqueAttributes,
  clearFilters,
}) => {
  return (
    <Form className="mb-4">
      <Row className="align-items-end">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">Todos los tipos</option>
            {uniqueTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={attributeFilter} onChange={(e) => setAttributeFilter(e.target.value)}>
            <option value="">Todos los atributos</option>
            {uniqueAttributes.map((attr, idx) => (
              <option key={idx} value={attr}>
                {attr}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <div className="text-end mt-2">
        <Button variant="secondary" size="sm" onClick={clearFilters}>
          Limpiar filtros
        </Button>
      </div>
    </Form>
  );
};

export default CardFilters;