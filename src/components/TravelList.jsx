
import travelPlansData from "../assets/travel-plans.json"
import { useState } from 'react';

function TravelList(){

    const [travelsToDisplay, setTravelsToDisplay] = useState(travelPlansData);

    const deleteTrip = (tripId) => {
        const newArray = travelsToDisplay.filter(tripObj => {
            if (tripObj.id === tripId){
                return false;
            } else {
                return true;
            }
        });
        setTravelsToDisplay(newArray);
    }


    return (
        <section className="TravelList">

        {travelsToDisplay.map((tripObj) => {
            return (
            <div key={tripObj.id} className="card">
                <img src={tripObj.image} />
                <h3>{tripObj.destination} ({tripObj.days} days)</h3>
                <p>{tripObj.description}</p>
                <p>Price: {tripObj.totalCost}€</p>

                <p>{tripObj.totalCost <= 350 && "Great Deal"}</p>
                <p>{tripObj.totalCost >= 1500 && "Premium"}</p>

                <p>
                    <button onClick={() => {deleteTrip(tripObj.id)}}>Delete trip</button>
                </p>
            </div>
            )
        })}
        </section>
    )
}

export default TravelList;