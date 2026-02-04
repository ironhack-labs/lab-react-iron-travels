 import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
     const [travelPlans, setTravelPlans] = useState(travelPlansData);

   return (
    <div className="container">
    {travelPlansData.map((plan) =>(<div key={plan.id}>
    <div id="block">
      <div className="image">
       <img src={plan.image} alt={plan.destination} />
       </div>
      <div className="text">
      <h3>{plan.destination} ({plan.days} days)</h3>
      <p>{plan.description}</p>
     
      <p><strong>Price:</strong>  {plan.totalCost} </p>

<div id="rendering labels">
    {plan.totalCost <= 350 ? (<button className="great-deal"
    >Great Deal</button>):plan.totalCost >= 1500 ?(<button className="prenium">Prenium</button>) : null}

    {plan.allInclusive ? (<button className="exclusive">All Inclusive</button>) : null}
        
</div>




      </div>
    </div>
    </div>))

     }
 </div>
   );
 }


 export default TravelList;

 import React, { Component } from 'react';

