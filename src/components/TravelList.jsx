import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from "react";

function TravelList() {
    const [planList, setPlanList] = useState(travelPlansData);

    const getLabel = (city) => {
        if (city.totalCost <= 350) {
            return <label className="labelDeal">Great Deal</label>;
        } else if (city.totalCost >= 1500) {
            return <label className="labelPremium">Premium</label>;
        }
    }

    const deletePlan = cityId => {
        let filteredCities = planList.filter(city => {
          return city.id !== cityId;
        });
     
        setPlanList(filteredCities);
      };

    return (
        
        <div className="container">
            {planList.map(city => {
                return (
                    <div key={city.id} className="cityCard">
                        <img className="cityImage" src={city.image} />
                        <div>
                            <h2>{city.destination} ({city.days} Days)</h2>
                            <p>{city.description}</p>
                            <p><b>Price:</b> {city.totalCost}€</p>
                            {getLabel(city)}
                            {city.allInclusive ? <label className="allLabel">All Inclusive </label> : ""}
                            <div>
                                <button onClick={() => deletePlan(city.id)} className="btn-delete">Delete</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )

}

export default TravelList;