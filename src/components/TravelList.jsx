import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updateTravelPlans = travelPlans.filter((plan) => plan.id !== id);
    setTravelPlans(updateTravelPlans);
  }

  return (
    <div>
      {travelPlans.map((plan) => (
        <div key={plan.id} style={destinationStyle}>
          <img src={plan.image} alt={plan.destination} style={imageStyle} />
          <div style={destinationInfoStyle}>
            <h3>
              {plan.destination} ({plan.days} Days)
            </h3>
            <p>{plan.description}</p>
            <p>Price: {plan.totalCost}€</p>
            {plan.totalCost <= 350 && (
              <p style={labelStyleGreatDeal}>Great Deal</p>
            )}
            {plan.totalCost >= 1500 && <p style={labelStylePremium}>Premium</p>}
            {plan.allInclusive && <span style={labelStyle}>All Inclusive</span>}
            <button onClick = {() => handleDelete(plan.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
const destinationStyle = {
  display: "flex",
  marginBottom: "20px",
  border: "1px solid black",
  padding: "20px",
  borderRadius: "5px",
};
const imageStyle = { width: "400px", marginLeft: "20px" };
const destinationInfoStyle = { flex: "1" };

const labelStyleGreatDeal = {
  backgroundColor: "green",
};

const labelStylePremium = {
  backgroundColor: "blue",
  color: "white",
};

const labelStyle = {
  backgroundColor: "blue",
  color: "white",
};

export default TravelList;
