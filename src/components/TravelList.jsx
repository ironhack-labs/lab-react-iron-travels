import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
    const [data, setData] = useState(travelPlansData)

    const deleteTravel = travelId => {
        const filteredTravel = data.filter(dataTravel => {
          return dataTravel.id !== travelId;
        });
        setData(filteredTravel)
    }

    return (
        <div>
            {data.map(dataTravel => {
                return (
                    <div key={dataTravel.id} className="itemCard">
                       
                       <TravelPlanCard key={dataTravel.id} travelData={dataTravel}/>

                        <button onClick={() => deleteTravel(dataTravel.id)} className="deleteButton">
                            Delete
                        </button>
                        
                    </div>
                )
            })}


        </div>
    )
}
