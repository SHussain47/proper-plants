import { useState } from "react";
import PLANTS from "./data";
import PlantSection from "./plants/PlantSelection";
import Cart from "./cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExist = cart.find((item) => item.id === plant.id);
    if (itemExist) {
      setCart(
        cart.map((item) => (item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item))
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  return (
    <>
      <h1>Plant Shop</h1>

      <main>
        <PlantSection plants={PLANTS} addToCart={addToCart} />
        <Cart cart={cart} addToCart={addToCart} />
      </main>
    </>
  );
}
