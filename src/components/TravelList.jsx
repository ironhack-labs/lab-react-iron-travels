import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json"
import TravelPlanCard from "./TravelPlanCard";
import FavoritePlanCard from "./FavoritePlanCard";

function TravelList () {
    const [travelPlansList, setTravelPlansList] = useState(travelPlansData);
    const [favoritePlansList, setFavoritePlansList] = useState([]);

    const deteleTravelPlan = (id) => {
        console.log("deleting travel plan... ", id);

        const newTravelPlansList = travelPlansList.filter((travelPlanObj) => {
            return travelPlanObj.id !== id;
        })

        setTravelPlansList(newTravelPlansList);
    }

    const favoriteTravelPlan = (id) => {
        console.log("starring travel plan...", id);
        if (!favoritePlansList.includes(id)) {
            setFavoritePlansList([...favoritePlansList, id])
        }

    }

    console.log("rendering travel plans...", travelPlansList);
    return (
        <div className="travel-list-container">
            <div className="travel-plans-list">
                {travelPlansList.map((travelPlanObj) => (
                    <TravelPlanCard 
                        travelPlanData={travelPlanObj} 
                        deleteCallback={deteleTravelPlan}
                        favoriteCallback={favoriteTravelPlan}
                    />
                ))}
            </div>
            <div >
                <h2>Favorites</h2>
                {travelPlansList.filter((travelPlanObj) => 
                    (favoritePlansList.includes(travelPlanObj.id))).map((travelPlanObj) =>(
                        <FavoritePlanCard travelPlanData={travelPlanObj} />
                    ))
                }
            </div>
        </div>
    )
}

export default TravelList;