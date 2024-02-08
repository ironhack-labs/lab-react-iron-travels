import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travel, setTravel] = useState(travelPlansData);
    const deleteTravel = (id) => setTravel(updatedTravel => updatedTravel.filter(ax=> ax.id !== id) )

    return (
        <div className="container">
            {travel.map((plan => {
                return (
                    <div key={plan.id} className="travelCard">
                        <h2>{plan.destination}</h2>
                        <img width={600} height={400} src={plan.image} alt={plan.destination} />
                        <p>{plan.description}</p>
                        <p>Price: {plan.totalCost}€</p>
                        <div>
                            {plan.totalCost <= 350 ? <span style={{boxShadow: "0px 2px 5px gray", borderRadius: "7px", padding: "7px", color: "white", backgroundColor: "blue"}}>Label: Cheap Deal</span> : null}
                            {plan.totalCost >= 1500 ? <span style={{boxShadow: "0px 2px 5px gray", borderRadius: "7px", marginRight: "7px",padding: "10px", color: "white", backgroundColor: "blue"}}>Label: Premium</span> : null}
                            {plan.allInclusive && <span style={{boxShadow: "0px 2px 5px gray", borderRadius: "7px", padding: "7px", color: "white", backgroundColor: "blue"}}> All Inclusive</span>}
                        </div>
                        <button style={{boxShadow: "0px 2px 5px gray", marginTop: "15px", borderRadius: "7px", padding: "7px", color: "white", backgroundColor: "grey"}} onClick={()=> deleteTravel(plan.id)}>Delete</button>
                    
                    </div>
                );
            }))}
        </div>
    );
}

export default TravelList;