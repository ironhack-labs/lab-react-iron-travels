import { useState } from "react";
import initialTravelPlansData from "../assets/travel-plans.json";
import TravelItem from "./TravelItem";

function TravelList () {

    const [travelPlansData, setTravelPlansData] = useState(initialTravelPlansData);


const handleDelete = (id) => {
    const updatedTravelPlans = travelPlansData.filter(travel => travel.id !== id);
    setTravelPlansData(updatedTravelPlans);
};
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-12 px-80">
            {travelPlansData.map((travel) => (

                <div key={travel.id} className="relative">
                    <TravelItem 
                        image={travel.image} 
                        destination={travel.destination} 
                        totalCost={travel.totalCost} 
                        description={travel.description} 
                        allInclusive={travel.allInclusive}
                    />
                    {/* Delete button */}
                    <button 
                        onClick={() => handleDelete(travel.id)} 
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    )
}

export default TravelList;