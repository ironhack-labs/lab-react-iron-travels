import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from './TravelPlanCard';

export default function TravelList() {
    const [travelList, setTravelList] = useState(travelPlansData);

    const handleDeleteClick = (id) => {
        setTravelList(prev => prev.filter(item => item.id !== id));
    }

    return (
        <div>
            {travelList.map((data) => (
                <TravelPlanCard
                    key={data.id}
                    plan={data}
                    onDelete={handleDeleteClick}
                />
            ))}
        </div>
    );
}