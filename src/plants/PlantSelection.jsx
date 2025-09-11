import Plant from "./Plant"



export default function PlantSection({ plants }) {
  return (
    <section>
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => {
          // console.log(plant);
          return <Plant key={plant.id} plant={plant} />
        })}
      </ul>
    </section>
  )
}
