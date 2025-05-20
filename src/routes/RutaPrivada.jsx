import { Navigate } from 'react-router-dom';

const RutaPrivada = ({ children }) => {
  const autenticado = localStorage.getItem('isAuthenticated') === 'true';
  return autenticado ? children : <Navigate to="/login" />;
};

export default RutaPrivada;
