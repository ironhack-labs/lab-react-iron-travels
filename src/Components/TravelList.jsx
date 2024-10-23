import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {

    const [travelsToDisplay, setTravelsToDisplay] = useState(travelPlansData);

    return (
        <div>
            {travelsToDisplay.map((element) => {
                return (
                    <div key={element.id}>
                        <img
                            src={element.image}
                            alt={element.destination}
                        />
                        <h2>{element.destination} ({element.days} Days)</h2>
                        <p>{element.description}</p>
                        <p>Price: {element.totalCost} €</p>
                    </div>
                );
            })}
        </div>
    );
}

export default TravelList;