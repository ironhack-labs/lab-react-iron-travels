import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./travel-plan-card";

function TravelList () {

    const [dataTravel, setDataTravel] = useState(travelPlansData);

    function deleteTravel(id) {
        const dataFilterTravel = dataTravel.filter((travel) => travel.id !== id);
        setDataTravel([...dataFilterTravel]);
    }

    return (
        <div className="container">
            {dataTravel.map((plan) => (
                < TravelPlanCard plan={ plan } key={ plan.id } deleteTravel={ deleteTravel }/>
            ))}
        </div>
    );
}

export default TravelList;