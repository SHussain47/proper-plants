export default function Plant({ plant, addToCart }) {
  return (
    <li>
      <figure>{plant.image}</figure>
      <h4>{plant.name}</h4>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </li>
  );
}
