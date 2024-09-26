import { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json";
import iconFavorite from "../assets/favoritar.png";
import iconNotFavorite from "../assets/desfavoritar.png";

function TravelList() {
    const [travel, setTravel] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);

    const setDeleteBtn = (id) => {
        const filteredTravel = travel.filter((placeObject) => placeObject.id !== id);
        setTravel(filteredTravel);
    };

    const toggleFavorite = (id) => {
        const isFavorite = favorites.some(fav => fav.id === id);
        if (isFavorite) {
            const updatedFavorites = favorites.filter(fav => fav.id !== id);
            setFavorites(updatedFavorites);
        } else {
            const selectedTravel = travel.find(placeObject => placeObject.id === id);
            setFavorites([...favorites, selectedTravel]);
        }
    };

    return (
        <>
            {travel.map((travelPlan) => (
                <section className="container" key={travelPlan.id}>
                    <div id="picture">
                        <img src={travelPlan.image} alt={travelPlan.destination} />
                    </div>
                    <article id="textContainer">
                        <div>
                            <h3><b>{travelPlan.destination} ({travelPlan.days} Days)</b></h3>
                            <h5>{travelPlan.description}</h5>
                        </div>
                        <div>
                            {travelPlan.totalCost >= 1500 ? (
                                <p>Premium</p>
                            ) : travelPlan.totalCost <= 350 ? (
                                <p>Great Deal</p>
                            ) : travelPlan.allInclusive === true ? (
                                <p>All Inclusive</p>
                            ) : null}
                        </div>
                    </article>
                    <div id="buttonContainer1">
                        <button className="buttonStyle1">Premium</button>
                        <button className="buttonStyle1">All Inclusive</button>
                    </div>
                    <div id="buttonContainer2">
                        <button onClick={() => setDeleteBtn(travelPlan.id)} className="buttonStyle2">Delete</button>
                        <img onClick={() => toggleFavorite(travelPlan.id)} className="buttonStyle2" src={favorites.some(fav => fav.id === travelPlan.id) ? iconNotFavorite : iconFavorite} alt="Favorite" />
                    </div>
                </section>
            ))}
        </>
    );
}

export default TravelList;
