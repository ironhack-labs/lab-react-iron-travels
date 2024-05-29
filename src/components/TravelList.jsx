import {useState} from 'react'
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    const [travelPlans] = useState(travelPlansData);;
    
      const handleDelete = (id) => {
        const updatedPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedPlans);
      };

  return (
    <div className="travel-list">
      <ul>
        {travelPlans.map((plan) => (
          <div key={plan.id} className="travel-plan-card">
            <img src={plan.image} alt={plan.destination} className="travel-image" />
            <div className="travel-plan-info">
              <h3>{plan.destination} ({plan.days} Days)</h3>
              <p>{plan.description}</p>
              <p><strong>Price:</strong> {plan.totalCost} €</p>
              <div className="labels">
                {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
                {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
                {plan.allInclusive && <span className="label all-inclusive">All Inclusive</span>}
                <button onClick={() => handleDelete(plan.id)} className="delete-button">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TravelList;