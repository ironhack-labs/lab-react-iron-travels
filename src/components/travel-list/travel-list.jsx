import { useEffect, useState } from "react";
import travelPlansData from "../../assets/travel-plans.json"
import TravelPlanCard from "../travel-plan-card/travel-plan-card";
import FavoriteCard from "../favorite-card/favorite-card";

function TravelList () {
    const [ travels, setTravels ] = useState([]);
    const [ favorites, setFavorites] = useState([]);

    useEffect( () => {
        setTravels( travelPlansData )
    }, []) 

    const onDelete = ( travelId) => {
        const filteredTravels = travels.filter( travel => travelId !== travel.id)
        setTravels( filteredTravels )
        setFavorites( favorites.filter( favorite => favorite.id !== travelId ))
    }

    const onFavorite = (travelId) => {
        const favoriteTravels = favorites.concat(
                                    travels.find (travel => travel.id === travelId )
                                )
        setFavorites(favoriteTravels)
    }

    return (
        <div className="d-flex gap-5">
            <div className="d-flex flex-column gap-3" >
                {travels.map( plan => (
                    <TravelPlanCard 
                        key={plan.id}
                        plan={plan}
                        onDelete={onDelete}
                        onFavorite={onFavorite}
                    />
                ))}
            </div>
            <div className="d-flex flex-column gap-3 text-center" >
                {favorites.length > 0 && <h2> Favorites </h2>}
                {favorites.map( favorite => (
                        <FavoriteCard 
                            key={favorite.id}
                            favorite={favorite}
                        />
                ))}
            </div>
        </div>
        
        
    );
}

export default TravelList;