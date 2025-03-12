import React,{useState} from "react";
import travelPlansData from "../assets/travel-plans.json";



const TravelList=()=>{
    const [travelPlans,setTravelPlans]=useState(travelPlansData);

const handleDelete=(id)=>{
    const updatedPlans=travelPlans.filter(plan=>plan.id!==id);
    setTravelPlans(updatedPlans);
};

    return(
        <div className="container">
            <ul className="travel-list">
                {travelPlans.map((plan)=>(
                    <li key={plan.id}  className="travel-card">
                       
                        <img src={plan.image} alt={plan.description} className="travel-image" />
                        <div className="travel-info">
                            <h3>{plan.destination} ({plan.days} Days)</h3>
                            <p>{plan.description}</p>
                            <p>Price:{plan.totalCost}</p>


                            <div className='labels'>
                                {plan.totalCost<=350 && <p>Great Deal</p>}
                                {plan.totalCost>=1500 && <p>Premium</p>}
                                {plan.allInclusive && <p>All-inclusive</p>}
                            </div>

                            <button className="delete-button" onClick={()=>handleDelete(plan.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TravelList;