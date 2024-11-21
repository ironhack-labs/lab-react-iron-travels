import { useState } from "react";
import data from '../assets/travel-plans.json';

function TravelList () {

    const [trips, setTrip] = useState(data);

    function generateLabel (travel) {

            if (travel.totalCost <= 350){
                return "Great Deal"
            }
            else if (travel.totalCost >= 1500) {
                return "Premium";}
            }

    function deleteTrip (deletedTripId) {
        const filteredTrips = trips.filter(trip => {
            return trip.id !== deletedTripId;
        })
        setTrip(filteredTrips)
    }



    return (

        <div >
            {trips && trips.map((travel => {
                return (
                <div className="div-travel" key={travel.id}>
                <img className="trip-image" src={travel.image} alt="" />
                <h2>{travel.destination}</h2>
                <p>{travel.description}</p>
                <h3>Price: ${travel.totalCost}</h3>
                <p>{generateLabel(travel) && generateLabel(travel)}</p>
                <p>{travel.allInclusive} All Inclusive</p>
                <button onClick={() => deleteTrip(travel.id)}>Delete</button>
        </div>
                
            )}))}
        </div>
    )
}

export default TravelList;