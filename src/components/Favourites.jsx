import { useState, useEffect } from "react";
import './Favourites.css'

function Favourites(props){

    const { favourites } = props;
    const [favouriteList, setFavouriteList] = useState(favourites);

    useEffect(() => { setFavouriteList(favourites) }, [favourites]);
   
    return(
        <div className="favs-layout">
            <h1>Favourites</h1>
            {favouriteList.map(favourite=>(
                <div key={favourite.id} className="favourite-box">
                    <div className="fav-img-container"><img src={favourite.image} alt="image of destination"/></div>
                    <h1><span>{favourite.destination}</span>&nbsp;&#10222;<span id="days">{favourite.days}</span>&nbsp;Days&#10223;</h1>
                    <h1>{favourite.totalCost} &euro;</h1>
                </div>
            ))}
        </div>)
}
export default Favourites;