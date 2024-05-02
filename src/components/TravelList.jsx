import travelPlans from '../assets/travel-plans.json'
import {useState} from 'react'

function TravelPlan () {
    const [places, setPlaces] = useState(travelPlans);

    function deleteTrip (tripid) {
        let filterTrips = places.filter((place) => {
            return place.id !== tripid
        })
        setPlaces(filterTrips)
    }


    return (
        <div>
            <div>
                {places.map((place) => {
                    return (
                        <div key={place.id}>
                            <img src={place.image}/>
                            <h4>{place.destination}</h4>
                            <h4>{place.days} Days</h4>
                            <h4>{place.description}</h4>
                            <h4>Price: {place.totalCost}€</h4>
                            {place.totalCost <= 350 &&
                                <p>Great Deal</p>
                            }
                            {place.totalCost >= 1500 && 
                                <p>Premium</p>
                            }
                            {place.allInclusive === true &&
                                <p>All Inclusive</p>
                            }

                            <button onClick={() => deleteTrip(place.id)}>
                                Delete
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TravelPlan