import travelPlansData from '../assets/travel-plans.json'
import { useState } from 'react'
import { TravelPlanCard } from './TravelPlanCard'
import { FavoriteList } from './FavoriteList'


export const TravelList = () => {

    const [travelList, setTravelList] = useState(travelPlansData)
    const deleteTravel = (travelId) => {
        const newTravelList = travelList.filter((travel) => travel.id !== travelId)
        setTravelList(newTravelList)
    }

    const [favoriteList, setFavoriteList] = useState([])
    const addToFavorite = (destinationId) => {
        const newFavorite = [...favoriteList ,destinationId]
        setFavoriteList(newFavorite)
    }
    return (
        <div className="travel-list">
            <div className="destination-column">
                {console.log(travelPlansData)}
                {travelList.map((destination)=> {
                    return (
                        <TravelPlanCard
                            key={destination.id}
                            destination={destination}
                            deleteTravel={deleteTravel}
                            onFavorite={addToFavorite}
                        />
                    )
                })
                }
            </div>

            {favoriteList.length > 0 && (
                <div className="favorites-column">
                    <FavoriteList favorites={favoriteList} />
                </div>
            )}

        </div>
    )
}