import { useState } from "react";
import travelPlansData from "../travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(
    travelPlansData.map((travelPlan) => travelPlan)
  );

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((travelPlan) => travelPlan.id !== id));
  };

  return (
    <ul>
      {travelPlans.map((travelPlan) => (
        <TravelPlan key={travelPlan.id} travelPlan={travelPlan} handleDelete={handleDelete}/>
      ))}
    </ul>
  );
};

const TravelPlan = ({ travelPlan, handleDelete}) => {
  console.log(travelPlan.image);
  return (
    <li className="travel-details" >
        <img className="img" src={travelPlan.image} alt="travelImage" />
      <div >
        <h3>{`(${travelPlan.destination} ${travelPlan.days} days)`}</h3>
        <p>{travelPlan.description}</p>
        <p>
          <strong>Price:</strong> {travelPlan.totalCost}€
        </p>
        {travelPlan.totalCost >= 1500 && <p className="blueLabel">Premium</p>}
        {travelPlan.allInclusive && <p className="blueLabel">All-Inclusive</p>}
        {travelPlan.totalCost <= 350 &&<p className="greenLabel">Great Deal</p>}
        <button type="button" onClick={() => handleDelete(travelPlan.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TravelList;
