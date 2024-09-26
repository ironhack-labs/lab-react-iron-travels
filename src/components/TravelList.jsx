import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function Travelist() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const handleRemove = (index) => {
    console.log("intentando borrar", index);
    let plansStateClone = JSON.parse(JSON.stringify(travelPlans));
    plansStateClone.splice(index, 1);
    setTravelPlans(plansStateClone);
  };
  return (
    <div>
      {travelPlans.map((plan, index) => (
        <div key={index} style={{display: "flex", border: "2px solid white"}}>
          <div>
            <img src={plan.image} alt={plan.destination} width="500px"/>
          </div>
          <div>
            <p>{plan.destination} ({plan.days} Dias)</p>
            <p>{plan.description}</p>
            <p>Costo: ${plan.totalCost}</p>
            {plan.totalCost <= 350 && <p>Oferta Especial</p>}
            {plan.totalCost >= 1500 && <p>Premium</p>}
            {plan.allInclusive && <p>Todo Incluido</p>}
            <button onClick={() => handleRemove(index)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Travelist;
