import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from './TravelPlanCard';

function TravelList() {
    const [list, setList] = useState(travelPlansData);
    const removeCallback = (removedId) => setList(list.filter((item) => item.id != removedId));

    return <div style={{ display: 'flex', flexDirection: 'column', width: "100%", gap: "20px", alignItems: "center" }}>
        {list.map((item) =>
            <TravelPlanCard key={item.id} data={item} removeCallback={removeCallback} />
        )}
    </div>
}

export default TravelList;