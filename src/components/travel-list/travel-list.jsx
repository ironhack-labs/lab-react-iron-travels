import { useState } from "react";
import travelPlansData from "../../assets/travel-plans.json";
import TravelPlanCard from "../travel-plan-card/travel-plan-card";
import TravelFavorites from "../travel-favorites/travel-favorites";

function TravelList() {
    const [plan, setPlan] = useState(travelPlansData);
    const [favs, setFavs] = useState([]);

    const handleDelete = (event) => {
        const filterPlan = plan.filter((plan) => (
            plan.id !== parseInt(event.target.id)
        ));
        setPlan(filterPlan);
    };
    const handleFav = (event) => {
        const filterFavs = plan.filter((p) => (
            parseInt(event.target.id) === p.id
        ));
        setFavs(favs => favs.concat(filterFavs))
        handleDelete(event);

    };
    return (
        <div className="d-flex flex-row gap-4 border border-primay">
            <div className="pt-5 ">
                <TravelPlanCard plan={plan} handleDelete={handleDelete} handleFav={handleFav} />
            </div>
            <div className="pt-5 ">
                <TravelFavorites favs={favs} />
            </div>
        </div>

    );
}

export default TravelList;
