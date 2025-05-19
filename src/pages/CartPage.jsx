import Cart from '../components/Cart';

const CartPage = ({ cart, onRemoveFromCart }) => {
  return (
    <>
      <h1 className="mb-4">Tu carrito</h1>
      <Cart cartItems={cart} onRemoveFromCart={onRemoveFromCart} />
    </>
  );
};

export default CartPage;
