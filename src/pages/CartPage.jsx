import Cart from '../components/Cart';
import { useCarrito } from '../context/CarritoContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCarrito();

  return (
    <>
      <h1 className="mb-4">Tu carrito</h1>
      <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
    </>
  );
};

export default CartPage;
