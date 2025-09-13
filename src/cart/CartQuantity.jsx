export default function CartQuanlity({ item, addToCart, removeFromCart }) {
  return (
    <div>
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}