{/*import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList () {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const handleDelete =(id) => {
        const updateTravelPlans = travelPlans.filter((plan) => plan.id !==id);
        setTravelPlans(updateTravelPlans);
    }
    return (
        <div className="TravelBox">
            {travelPlans.map((props, index) => 
            ( 
            <div key={index} className="IndividualBox">
            <img src={props.image}/>
            <div className="TextBox">
            <h2>{props.destination} ({props.days} Days)</h2>
            <p><i>{props.description}</i></p>
            <p>Price: {props.totalCost} € {" "} 
                {props.totalCost <= 350 && <span className="LabelBox GreatDeal">Great Deal</span>}
                {props.totalCost >= 1500 && <span className="LabelBox Premium">Premium</span>}
                {props.allInclusive && <span className="LabelBox AllInclusive">All Inclusive</span>}
            </p>
            <button className="Button" onClick={() => handleDelete(props.id)}>Delete</button>
            </div>
            </div>
            )
            )}
        </div>
    )

}

export default TravelList;
*/}