import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";


function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deleteTravel = (id) => {
        setTravelPlans((currentPlans) =>
            currentPlans.filter((travel) => travel.id !== id)
        );
    };

    const labelCheck = (travel) => {
        if (travel.totalCost <= 350) return <label style ={{backgroundColor: "green",color: "black", padding : 5, }}>Great Deal</label>;
        if (travel.totalCost >= 1500) return <label style ={{backgroundColor: "blue",color: "white", padding : 5, }}>Premium</label>;
        return null;
    };

    return (

        <div>

            {travelPlans.map((travel) => (
                <article key={travel.id}>
                    <img src={travel.image} alt={travel.destination} />
                    <h2>{travel.destination}</h2>
                    <p>Price: {travel.totalCost}</p>
                    {labelCheck(travel)}
                    {travel.allInclusive && <span>All Inclusive</span>}
                    <button type="button" onClick={() => (travel.id)}>
                        Delete
                    </button>
                </article>
            ))}

        </div>



    )

}


export default TravelList