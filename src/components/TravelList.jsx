import {useState} from 'react'
import travelplans from '../assets/travel-plans.json'

function TravelList(){
   
    const [plans, setPlans] = useState(travelplans);
    // create a new variable with a new array to work on
    const newPlans = [...plans];
    // loop in the array to define plan into an Index
    for (let i=0;i<travelplans.length;i++){
       const plan = newPlans[i]
    }
    // delete button - create a new variable with a new array without the index filtered.
    const deletePlan = (planId) => {
        const updatedPlans = plans.filter((plan) => plan.id !== planId);
        setPlans(updatedPlans);
    };

    
    return(
        <div>
        <div>
            {newPlans.map((plan)=>{
                return (
                    <div key={plan.id} className="TripPlan">
                        <img src={plan.image} />
                        <div className="tripInfo">
                        <h3>{plan.destination}</h3>
                        <p>{plan.description}</p>
                        <p>Price: {plan.totalCost} €</p>
                        <div>
                            {plan.totalCost <= 350 ?  <p className="GreatDeal"><strong>Great Deal</strong></p> : null}
                            {plan.totalCost >= 1500 ?  <p className="Premium"><strong>Premium</strong></p> : null}
                            {plan.allInclusive && <p className="Premium"><strong>All Inclusive</strong></p>}
                        </div>
                        <button onClick={() => deletePlan(plan.id)}>Delete Plan</button>
                        </div>
                    </div>   
                    )
                })}
        </div>
    </div>
    )

/* function deleteBtn(){
    const [showPlan, setShowPlans] = useState(true);
 
    const deletePlan = planId => {
    const filteredPlan = plans.filter(plan => {
      return plan._id !== planId;
    });
    setPlans(filteredMovies);
  };
 
  const toggleShowPlans = () => {
    setShowPlans(!showPlans);
  };
  <button onClick={toggleShowPlans}>{showPlans ? 'Hide' : 'Show'}</button>
} */
}

export default TravelList;