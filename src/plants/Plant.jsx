export default function Plant({ plant }) {
  return (
    <li>
      <figure>{plant.image}</figure>
      <h4>{plant.name}</h4>
      
    </li>
  )
}