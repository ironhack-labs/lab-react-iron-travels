import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import FavCard from "./FavCard";


function TravelList() {

    const [travels, setTravels] = useState(travelPlansData);
    const [favList, setFavList] = useState([]);

    const handleDelete = (index) => {

        const delIndex = travels.findIndex((travel)=>travel.id===index);
        const clone = travels.slice(0);
        clone.splice(delIndex, 1);

        setTravels(clone);
    }

    const handleFav = (favIndex) => {
        //Lo sacamos de la lista
        let favPlan = travelPlansData.find((fav) => fav.id === favIndex)
        console.log(favPlan);

        const cloneFav = favList.slice(0);
        cloneFav.push(favPlan);
        console.log(cloneFav);
        setFavList(cloneFav);
        
        handleDelete(favIndex);
        
    }


    return(
        <div className="flex-row">
            <div className="flex-column">
                {travels.map((plan)=>{
                    return(
                    <div key={plan.id} className="planCard flex-row">
                        <TravelPlanCard plan={plan} index={plan.id}/>
                        <button onClick={() => handleDelete(plan.id)}>X</button>
                        <button onClick={() => handleFav(plan.id)}>♡</button>
                    </div>
                    );
                })}
            </div>
            <div className="flex-column">
                <h3>Favorites</h3>
                {favList.map((fav) => {
                    return (
                        <FavCard key={fav.id} plan={fav}/>
                    );
                })}
            </div>
        </div>
    );
}

export default TravelList;