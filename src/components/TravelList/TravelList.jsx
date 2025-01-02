import { useState } from 'react';
import travelPlansData from "../../assets/travel-plans.json";
import './TravelList.css'

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const getCostLabel = (cost) => {
    if (cost <= 350) {
      return <button className="label great-deal">Great Deal</button>;
    } else if (cost >= 1500) {
      return <button className="label premium">Premium</button>;
    }
    return null;
  };

  const handleDelete = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

    return (
    <div className="travel-list-container">
      <ul className="travel-list">
        {travelPlans.map((plan) => (
          <li key={plan.id} className="travel-item">
            <div className="travel-item-content"> 
              <img src={plan.image} alt={plan.destination} className="travel-image" />
              <div className="travel-details">
                <h3>{plan.destination} ({plan.days} Days)</h3>
                <p>{plan.description}</p>
                <p>Price {plan.totalCost} €</p>
                <div className="labels">
                  {getCostLabel(plan.totalCost)}
                  {plan.allInclusive && <button className="label all-inclusive">All Inclusive</button>}
                </div>
                <button className="delete-button" onClick={() => handleDelete(plan.id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;