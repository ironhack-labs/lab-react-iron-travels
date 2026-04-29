import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
const handleDelete = (id) => {
  setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
}
  return (
    <div >
      {travelPlans.map((plan) => (
        <div key={plan.id} style={{alignItems:"center", display: "flex", width:"80%", border: "1px solid #213547", margin: "10px", padding:"15px"}}>
          <img src={plan.image} alt={plan.destination} style={{width: "200px", height:"140px"}}/>
          <div>
          <h2>{plan.destination} ({plan.days} Days)</h2>
          <p>{plan.description}</p>
          <p><strong>Price: </strong>{plan.totalCost} €</p>
          <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default TravelList;