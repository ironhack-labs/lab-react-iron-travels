import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import './TravelList.css'

function TravelList () {

    const [travels, setTravels] = useState(travelPlansData)
    const [favourites, setFavourites] = useState([])

    const deleteTravel = (travelId) => {
        setTravels(travels.filter((travel) => {
            return travel.id !== travelId
        }))
    }

    const upgradeFavourites = (travelId) => {
        const newFav = travels.find((travel) => {
            return travel.id === travelId
        })

        if(!favourites.includes(newFav)){
            setFavourites(favourites.concat(newFav))
        } else {
            setFavourites(favourites.filter((travel) => {
                return travel.id !== travelId
            }))
        }
    }

    return (
        <div id="all-container">
            <div id="travels-container">
                {travels.map((travel) => {
                    let label = ''

                    if(travel.totalCost <= 350) {
                        label = 'Great Deal'
                    } else if(travel.totalCost >= 1500) {
                        label = 'Premium'
                    }

                    if(travel.allInclusive)
                        label += ' All-inclusive'

                    return (
                        <section className="card" key={travel.id}>
                            <div id="img-container">
                                <img src={travel.image}/>
                            </div>
                            <div>
                                <h2>{travel.destination} ({travel.days} Days)</h2>
                                <p>{travel.description}</p>
                                <p><strong>Price: </strong>{travel.totalCost}€</p>
                                <p><strong>{label}</strong></p>
                                <button onClick={() => {deleteTravel(travel.id)}}>Delete</button>
                                <button onClick={() => {upgradeFavourites(travel.id)}}>♡</button>
                            </div>
                        </section>
                    )
                })}
            </div>
            <div id="favourites-container">
                <h1>Favourites</h1>
                {favourites.map((favourite) => {
                    return (
                        <section className="card" key={favourite.id}>
                            <div id="img-container">
                                <img src={favourite.image}/>
                                <h2>{favourite.destination} ({favourite.days} Days)</h2>
                                <p><strong>Price: </strong>{favourite.totalCost}€</p>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default TravelList