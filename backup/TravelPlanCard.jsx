import travelPlansData from "../assets/data/travel-plans.json";
import { useState } from 'react';

const TravelPlanCard = () => {

    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    const handleDelete = (id) => {
        setTravelPlans(travelPlans.filter(plan => plan.id !== id))
    }

    return ( 
        <>
            {travelPlans.map(plan => (
                <div key = {plan.id} className="travel-plan">
                    <div className ="image-div" >
                        <img src={plan.image} alt= {plan.destination} />
                    </div>

                    <div className ="info-div">
                        <h2> {plan.destination} </h2>
                        <p> {plan.description} </p>
                        <p> 
                            <span style={{fontWeight:'bold'}}> Price: </span> 
                        {plan.totalCost}€ 
                        </p>
                        {plan.totalCost<=350 && <p> Great Deal </p>}
                        {plan.totalCost > 1500 && <p> Premium </p>}
                        {plan.allInclusive && <span> All-inclusive </span>}
                        <button type="button" onClick={() => handleDelete(plan.id)} > Delete </button>                       
                    </div>
                   
                </div>

            ))}     
        </> 
     );
}
 
export default TravelPlanCard;