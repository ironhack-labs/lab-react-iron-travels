import React from 'react'
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {

  const [plans, setPlans] = useState(travelPlansData);

  const getLabels = (totalCost, allInclusive) => {
    let labels = [];

    if (totalCost <= 350) {
      labels.push('Great Deal');
    } else if (totalCost >= 1500) {
      labels.push('Premium');
    }

    if (allInclusive) {
      labels.push('All Inclusive');
    }

    return labels;
  };

  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans); 
  };

  return (
    <div>
      <h2>My Travel Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <p>Date: {plan.date}</p>
            <p>Duration: {plan.duration}</p>
            <p>Cost: ${plan.totalCost}</p>

            <p>
              {getLabels(plan.totalCost, plan.allInclusive).map((label, index) => (
                <span key={index} style={{ marginRight: '10px', fontWeight: 'bold', color: 'green' }}>
                  {label}
                </span>
              ))}
            </p>

            <button onClick={() => handleDelete(plan.id)} style={{ backgroundColor: 'red', color: 'white' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
