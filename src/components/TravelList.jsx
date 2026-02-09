import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "../components/TravelPlanCard"
import { useState } from 'react'

function TravelList() {
    
    const [trips, setTrips] = useState(travelPlansData);

    function handleDeleteTrip(tripId){
        const filteredTrips = trips.filter((trip) => trip.id !== tripId);
        setTrips(filteredTrips);
    }

    return (
        <>
            {trips.map((oneTrip) => {
                return (<TravelPlanCard 
                    key={oneTrip.id}
                    plan={oneTrip} 
                    handleDeleteTrip={handleDeleteTrip}
                />)
                
            })}
        </>
    )
}

export default TravelList