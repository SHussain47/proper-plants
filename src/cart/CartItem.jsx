import CartQuanlity from "./CartQuantity";

export default function CartItems({ item, addToCart, removeFromCart }) {
  return (
    <li>
      <div>
        {item.image} {item.name}
      </div>

      <CartQuanlity 
        item={item} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
      />
    </li>
  );
}
