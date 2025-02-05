import { useState } from "react";
import travel from "../assets/travel-plans.json"


function TravelList(){

    const [travelToDisplay, setTravelToDisplay] = useState(travel);


    const deleteTravel = (travelId) => {
        const newListOfTravel = travelToDisplay.filter( (travel) => {
            return travel.id !== travelId;
        });
        setTravelToDisplay(newListOfTravel);
    }

    
    return (
        <section>

            <h2>Number of travel: {travelToDisplay.length}</h2>

            {travelToDisplay.map((travelObj) => {
                return (
                    <div key={travelObj.id}>
                        <p>{travelObj.destination} {travelObj.days}</p>
                        <img src={travelObj.image} alt={travelObj.destination} />
                        <p>Cost: {travelObj.totalCost}</p>
                        <p>{travelObj.description}</p>
                        <p>{travelObj.allInclusive ? "This travel is all-inclusive." : null}</p>
                        <p>{travelObj.totalCost < 350 ? "Great Deal" : null}</p>
                        <p>{travelObj.totalCost > 1500 ? "Premium" : null}</p>
                        <button onClick={() => {deleteTravel(travelObj.id)}}>Delete</button>
                    </div>
                )
            })}
        </section>
    );
}

export default TravelList;