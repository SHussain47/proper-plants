import { useState } from "react";
import PLANTS from "./data";
import PlantSection from "./plants/PlantSelection";

export default function App() {

  return (
    <>
      <h1>Plant Shop</h1>

      <main>
        <PlantSection plants={PLANTS} />
        {/* <Cart /> */}
      </main>
    </>
  );
}
