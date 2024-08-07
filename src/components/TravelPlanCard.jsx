import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

export function TravelPlanCard({ plan }) {
    const [currTravelList, setCurrTravelList] = useState(plan);
    const [favorites, setFavorites] = useState([]);
    const [buttonColors, setButtonColors] = useState({});

    const setLabels = travelPlan => {
        if (travelPlan.parts[0].cost <= 350) {
            return (
                <div className="labels">
                    <div className="label-cheap"> Great Deal </div>
                    {travelPlan.allInclusive && 
                        <div className="label-cheap"> All Inclusive </div>
                    }
                </div>
            )
        } else if (travelPlan.parts[0].cost >= 1500){
            return (
                <div className="labels">
                    <div className="label-expensive"> Premium </div>
                    {travelPlan.allInclusive && 
                        <div className="label-expensive"> All Inclusive </div>
                    }
                </div>
            )
        }
    }

    const deletePlan = planId => {
        setCurrTravelList(currTravelList.filter(plan => plan.id !== planId));
        setFavorites(favorites.filter(fav => fav.id !== planId));
    }

    const favoritePlan = planId => {
        const plan = currTravelList.find(plan => plan.id === planId);
        if (!favorites.some(fav => fav.id === planId)) {
            setFavorites([...favorites, plan]);
        } else {
            setFavorites(favorites.filter(fav => fav.id !== planId));
        }

        setButtonColors(prevColors => {
            const currentIndex = colors.indexOf(prevColors[planId]) || 0;
            const nextIndex = (currentIndex + 1) % colors.length;
            return { ...prevColors, [planId]: colors[nextIndex] };
        });
    }

    return (
        <div className="TravelPlanContainer">
            
            <div className="TravelPlanCard">
                {currTravelList.map(travelPlan => {
                return (
                    <div key={travelPlan.id} className="travel-card">
                        <img src={travelPlan.image} alt="Destination Photo" />
                        <div className="travel-information">
                            <h3>{travelPlan.destination} ({travelPlan.days} Days)</h3>
                            <p>{travelPlan.description}<br></br><strong>Price:</strong> {travelPlan.parts[0].cost} €</p>
                            <div> {setLabels(travelPlan)} </div>
                            <p className="buttons"> 
                                <button className="delete-button" onClick={() => deletePlan(travelPlan.id)}>Delete</button> 
                                <button 
                                    className="favorite-button" 
                                    onClick={() => favoritePlan(travelPlan.id)}
                                    style={{ backgroundColor: buttonColors[travelPlan.id] || "white" }}
                                >♡</button>
                            </p>
                        </div>
                    </div>
                    )
                })}
            </div>

            <div className="FavoritesList">
                <h2>Favorites</h2>
                {favorites.map(fav => (
                    <div key={fav.id} className="travel-card">
                        <img src={fav.image} alt="Destination Photo" />
                        <div className="travel-information">
                            <h3>{fav.destination} ({fav.days} Days)</h3>
                            <p>{fav.parts[0].cost} €</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}