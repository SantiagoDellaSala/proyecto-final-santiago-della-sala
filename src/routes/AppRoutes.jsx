import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/LoginPage';
import RutaPrivada from './RutaPrivada';

function AppRoutes({ products, loading, error }) {
  return (
    <Routes>
      <Route path="/" element={<Home products={products} loading={loading} error={error} />} />
      <Route
        path="/carrito"
        element={
          <RutaPrivada>
            <CartPage />
          </RutaPrivada>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default AppRoutes;