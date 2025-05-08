import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearCarta = ({ addCard }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [attribute, setAttribute] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: Date.now(),
      name,
      imageUrl,
      price,
      type,
      attribute,
    };

    addCard(newCard);

    Swal.fire({
      icon: 'success',
      title: '¡Carta creada con éxito!',
      text: 'La carta se ha agregado correctamente.',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container">
      <h2>Crear una nueva carta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Imagen URL</label>
          <input
            type="url"
            id="imageUrl"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Tipo</label>
          <input
            type="text"
            id="type"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attribute" className="form-label">Atributo</label>
          <input
            type="text"
            id="attribute"
            className="form-control"
            value={attribute}
            onChange={(e) => setAttribute(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear Carta</button>
      </form>
    </div>
  );
};

export default CrearCarta;
