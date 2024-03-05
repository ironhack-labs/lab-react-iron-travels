import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react"; 

import TravelPlanCard from "./TravelPlanCard";
import Favorites from "./Favorites";


const TravelList = () => {

    // Declare a state variable "travelList"
    // and set the array from travel-plans.json as the initial state
    const [destinations, setDestinations] = useState(travelPlansData); 
    const [favorites, setFavorites] = useState([])

    const removeDestination = (id) => {
        let filtered = destinations.filter((destination) => destination.id !== id)
        setDestinations(filtered)
    }

    const addToFavorites = (id) => {
        let thisFavorite = destinations.find((destination) => destination.id === id)
        let foundFavorite = favorites.find((favorite) => favorite.id === id)
        if(!foundFavorite) {
            setFavorites([thisFavorite, ...favorites])
        }
    }
            
   
    return (
        <div className="travel-container">

            <div className="travel-list">
                <h2>Travel List</h2>

                {
                    destinations.map((destination) => {
                        return (
                            <TravelPlanCard destination={destination} removeDestination={removeDestination} addToFavorites={addToFavorites}/>
                        )
                    })
                }

            </div>

            <div className="favorites-container">
                <h2>Favorites</h2>

                {
                    favorites.map((favorite) => {
                        return(
                            <Favorites key={favorite.id} favorite={favorite} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TravelList;


// destinations.map((item) => {
//     return (
//         <div key={item.id} className="travel-card">

//             <img src={item.image} alt={item.destination} width="150px" />
            

//             <h2>{item.destination} {`(${item.days} Days)`} </h2>
//             <p> {item.description} </p>
//             <p> Price: {`${item.totalCost}€`} </p>

//             {/* Iteration 2 */}
//             <p>{item.totalCost <= 350 ? <p> Great Deal </p> : null } </p>
//             <p>{item.totalCost >= 1500 ? <p> Premium </p> : null } </p>
//             <p>{item.allInclusive === true ? <p> All Inclusive </p> : null}</p>

//             {/* Iteration 3 */}
//             <button onClick={() => deleteTravelCard(item.id)} className="btn-delete">
//                 Delete
//             </button>

//         </div>
//     )
// })