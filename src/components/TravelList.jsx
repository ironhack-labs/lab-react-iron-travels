import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {


  return (
    <section>
      <div>
      { 
        travelPlansData.map((plan) => {
            return (
                <TravelPlanCard key={plan.id} plan={plan}/>
                );
            })
            
        }
      </div>
    </section>
  );
}

export default TravelList;
