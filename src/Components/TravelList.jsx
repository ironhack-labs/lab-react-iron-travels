import { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div className='Travelplans'>
      <div>
        {travelPlans.map((plan) => (
          <div key={plan.id} className='travel-card'>
            <div className='image'>
              <img src={plan.image} />
            </div>
            <div className='travel-text'>
              <h1 className='travel-title'>
                {plan.destination} ({plan.days} days)
              </h1>
              <h2 className='description'>{plan.description}</h2>
              <h3 className='cost'>Price: {plan.totalCost} €</h3>
              <div className='labels'>
                {plan.totalCost <= 350 && (
                  <div className='green-label'>Great Deal</div>
                )}
                {plan.totalCost >= 1500 && (
                  <div className='blue-label'>Premium</div>
                )}
                {plan.allInclusive === true && (
                  <div className='blue-label'>All-Inclusivel</div>
                )}
              </div>
              <div>
                <button
                  className='delete-button'
                  onClick={() =>
                    setTravelPlans(
                      travelPlans.filter((travel) => travel.id !== plan.id)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TravelList;
