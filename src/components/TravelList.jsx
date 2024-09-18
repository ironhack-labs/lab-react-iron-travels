import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard"; 

function TravelList() {

  const [travelArr, setTravel] = useState(travelPlansData);

  const handleDelete = (index) => {
    const clone = travelArr.slice(0);  // Crea una copia de travelArr
    clone.splice(index, 1);            // Elimina un elemento en el índice especificado
    setTravel(clone);                  // Actualiza el estado con el nuevo array
  }


  return (
    <div>
      {travelArr.map((eachTravel, index) => (
        <TravelPlanCard 
          key={index}
          eachTravel={eachTravel}
          onDelete={() => handleDelete(index)}  // Pass the delete function
        />
      ))}
    </div>
  );
}

export default TravelList;
