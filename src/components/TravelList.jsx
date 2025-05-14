import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelListArr, setTravelListArr] = useState(travelPlansData);

  const handleDelete = (indexToDelete) => {
    const updatedList = travelListArr.filter((_, index) => index !== indexToDelete);
    setTravelListArr(updatedList);
  };

  return (
    <div>
      <h3>Tailored Travel Plans for Ironhackers</h3>
      <ul>
        {travelListArr.map((cadaObjetodeDestino, index) => (
          <li key={index}>
            {cadaObjetodeDestino.destination}
            <img src={cadaObjetodeDestino.image} alt={cadaObjetodeDestino.destination} />
            {cadaObjetodeDestino.totalCost}
            {cadaObjetodeDestino.description}
            {cadaObjetodeDestino.days}

            {/* Condicional: etiquetas según el precio */}
            {cadaObjetodeDestino.totalCost <= 350 && <span> - Great Deal</span>}
            {cadaObjetodeDestino.totalCost >= 1500 && <span> - Premium</span>}

            {/* Condicional: etiqueta si es all inclusive */}
            {cadaObjetodeDestino.allInclusive && <span> - All Inclusive</span>}

            {/* Botón para eliminar */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;
