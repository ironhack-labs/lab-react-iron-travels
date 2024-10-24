import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";


function TravelList() {
    const travelList = travelPlansData;
    
    const [travelListToDisplay, setTravelListToDisplay] = useState(travelList);

    const deleteTravelObj = (travelId) => {
        const newArray = travelListToDisplay.filter((travelObj) => {
            return travelObj.id !== travelId;  
        })
        setTravelListToDisplay(newArray);
    }
    
    return (
        <div className="travelListContainer">
            {travelListToDisplay.map((travelObj) => {
                let label;
                if (travelObj.totalCost < 350) {
                    label = <span className="dealLabel">Deal</span>;
                } else if (travelObj.totalCost > 1500) {
                    label = <span className="premiumLabel">Premium</span>;
                }

                return (
                    <div key={travelObj.id} className="travelCard">
                        <img src={travelObj.image} alt={`Destination: ${travelObj.destination}`} />
                        <p>Destination: {travelObj.destination}</p>
                        <p>Days: {travelObj.days}</p>
                        <p>All inclusive: {travelObj.allInclusive ? "Yes" : "No"}</p>
                        <p>Total cost: {travelObj.totalCost}</p>
                        <p>Description: {travelObj.description}</p>
                        {label && <div>{label}</div>}
                        <button onClick={() => {deleteTravelObj(travelObj.id)}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TravelList;
