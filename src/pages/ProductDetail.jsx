import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el producto');
        return res.json();
      })
      .then((data) => setProduct(data.data[0]))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="container my-4">
      <h2>{product.name}</h2>
      <img
        src={product.card_images[0]?.image_url}
        alt={product.name}
        className="img-fluid mb-3"
      />
      <p><strong>Tipo:</strong> {product.type}</p>
      <p><strong>Descripción:</strong> {product.desc}</p>

      <Button variant="secondary" className="mt-3" onClick={() => navigate('/')}>
        ← Volver
      </Button>
    </div>
  );
};

export default ProductDetail;