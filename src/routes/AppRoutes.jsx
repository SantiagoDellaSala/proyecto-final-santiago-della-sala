import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/LoginPage';

function AppRoutes({ products, loading, error, cart, addToCart, removeFromCart }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            products={products}
            loading={loading}
            error={error}
            addToCart={addToCart}
          />
        }
      />
      <Route
        path="/carrito"
        element={
          <CartPage
            cart={cart}
            onRemoveFromCart={removeFromCart}
          />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default AppRoutes;
