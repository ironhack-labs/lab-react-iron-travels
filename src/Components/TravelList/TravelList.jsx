import "./TravelList.css";


import travelPlansData from "./../../assets/travel-plans.json";

import { useState } from "react";


function TravelList () {

    const [travelIdeas, setTravelIdeas]  = useState(travelPlansData);
    // Fetch the data 

    const deleteButton = (travelPlan) => {
        const newList = travelIdeas.filter((travelObj) => {
            return  travelObj.id !== travelPlan;
        });
        
        setTravelIdeas(newList);
    } 

    return (
        <div className="travel-container">
          <ul>
            {travelIdeas.map((travelPlan) => (
              <li key={travelPlan.id}>
                <img src={travelPlan.image} alt={`Image of ${travelPlan.destination}`} />
                <h3>{travelPlan.destination}, {travelPlan.days}</h3>
                <p>{travelPlan.description}</p>
                <span>Price: {travelPlan.totalCost} $</span>
                
                {travelPlan.totalCost <= 350 ? <span className="green label">Great Deal</span> : <span className="blue label">Premium</span>}
               
                {travelPlan.allInclusive  === true && <span className="blue label">All Inclusive</span>}

                <button onClick = {() =>  {deleteButton(travelPlan.id)}}>Delete</button>

               

              </li>
            ))}
          </ul>
        </div>
      );
}







export default TravelList;