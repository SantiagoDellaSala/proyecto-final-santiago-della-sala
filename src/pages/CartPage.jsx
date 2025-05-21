import Cart from '../components/Cart';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <>
      <h1 className="mb-4">Tu carrito</h1>
      <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
    </>
  );
};

export default CartPage;
