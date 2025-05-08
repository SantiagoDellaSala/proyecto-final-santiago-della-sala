import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditarCarta = ({ updateCard }) => {
  const { id } = useParams(); // Para capturar el id de la carta (por si lo necesitas en el futuro)
  const location = useLocation();
  const navigate = useNavigate();

  // Carta que pasamos desde el Home o la página anterior
  const carta = location.state?.card;

  // Estados locales para manejar el formulario de edición
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [attribute, setAttribute] = useState('');

  // Cuando se carga la carta, actualizamos los valores del formulario
  useEffect(() => {
    if (carta) {
      setName(carta.name);
      setImageUrl(carta.imageUrl);
      setPrice(carta.price);
      setType(carta.type);
      setAttribute(carta.attribute);
    }
  }, [carta]);

  // Lógica para enviar el formulario y actualizar la carta
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCard = {
      ...carta,  // Copiamos los datos actuales de la carta
      name,
      imageUrl,
      price,
      type,
      attribute,
    };

    // Llamamos a la función `updateCard` pasada como prop para actualizar la carta
    updateCard(updatedCard);

    // Mostramos un SweetAlert de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Carta actualizada!',
      text: 'Los cambios se guardaron correctamente.',
    }).then(() => {
      // Después de mostrar el mensaje, redirigimos a la página principal (o donde lo necesites)
      navigate('/');
    });
  };

  // Si no encontramos la carta, mostramos un mensaje
  if (!carta) return <p className="text-center">No se encontró la carta.</p>;

  return (
    <div className="container">
      <h2>Editar carta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen URL</label>
          <input
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <input
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Atributo</label>
          <input
            className="form-control"
            value={attribute}
            onChange={(e) => setAttribute(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default EditarCarta;
