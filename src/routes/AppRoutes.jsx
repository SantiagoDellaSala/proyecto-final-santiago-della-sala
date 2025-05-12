import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Ofertas from '../pages/Ofertas';
import Ingresar from '../pages/Ingresar';
import CrearCarta from '../pages/CrearCarta';
import EditarCarta from '../pages/EditarCarta';
import ErrorPage from '../pages/ErrorPage';  // Crea una página de error
import ProtectedRoute from './ProtectedRoute';  // Importa el componente para las rutas protegidas

function AppRoutes({ cards, loading, addCard, error }) {
  return (
    <Routes>
      {/* Si hay un error, muestra la página de error */}
      {error ? (
        <Route path="*" element={<ErrorPage error={error} />} />  // Muestra una página de error si algo falla
      ) : (
        <>
          <Route path="/" element={<Home cards={cards} loading={loading} addCard={addCard} />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/ingresar" element={<Ingresar />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/carrito" element={<Cart />} />
            <Route path="/crear-carta" element={<CrearCarta addCard={addCard} />} />
            <Route path="/editar-carta/:id" element={<EditarCarta />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default AppRoutes;

