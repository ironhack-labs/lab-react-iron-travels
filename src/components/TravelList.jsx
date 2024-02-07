import React from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelItem, setTravelItem] = useState(travelPlansData)

    const travelPackage = travelItem.map((travelDetails) => (   // Note to myself: parentheses for implicit return
        <div key={travelDetails.id} className="TravelInfos">
            <img src={travelDetails.image} alt="{travelDetails.destination}" />
            <h2>{travelDetails.destination} ({travelDetails.days} Days)</h2>
            <p>{travelDetails.description}</p>
            <p><strong>Price: </strong>{travelDetails.totalCost} €</p>

            {travelDetails.totalCost <= 350 && <p>Great Deal</p>}
            {travelDetails.totalCost >= 1500 && <p>Premium</p>}
            {travelDetails.allInclusive && <p>All Inclusive</p>}

            <button onClick={() => {deleteTravelPackage(travelDetails.id)}}>Delete</button>
        </div>
    ))

    const deleteTravelPackage = (packageToDelete) => {
        const newTravelList = travelItem.filter((item) =>
            item.id !== packageToDelete);
        setTravelItem(newTravelList)
    };

    return (
        <section className="TravelList">
            {travelPackage}
        </section>
    )
}

export default TravelList;