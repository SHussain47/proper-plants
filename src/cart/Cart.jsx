import CartItems from "./CartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => {
            return (
              <CartItems
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}
