import travelPlansData from "../assets/travel-plans.json";
import React, { useState, useEffect } from "react";

function TravelList() {

  const [travelPlans, setTravelPlans] = useState([]);

  const handleDelete = (index) => {
    const updatedPlans = [...travelPlans];
    updatedPlans.splice(index, 1);
    setTravelPlans(updatedPlans);
  }

    useEffect(() => {
      setTravelPlans(travelPlansData);
    }, []);


    return (
      <div>
        <h2>Travel Plans</h2>

        <ul className="card">
          {travelPlans.map((plan, index) => (
            <ul key={index}>
              <img className="images" src={plan.image}></img>
              <h3>{plan.destination}</h3>
              <h3>({plan.days} days)</h3>
              <p>{plan.description}</p>
              <p>Price: {plan.totalCost} €</p>
              <div>
                {plan.totalCost <= 350 ? 'Great Deal' : plan.totalCost >= 1500 ? 'Premium' : ''}
                {plan.allInclusive ? ' All Inclusive' : ''}
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>

            </ul>
          ))}
        </ul>

      </div>

    );
  }

  export default TravelList;