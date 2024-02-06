import React, {useState} from "react";

function TravelPlanCard ({plan, onDelete, onFavorite}) {
    const {image, destination, days, description, totalCost, id, allInclusive} = plan;
    const [favoriteColorIndex, setFavoriteColorIndex] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const handleDelete =() => {
        onDelete(id);
    };
    const handleFavorite = () => {
        onFavorite(plan);
        setFavoriteColorIndex((prevIndex) => (prevIndex +1) % colors.length);
    }

    return (
        <div className="IndividualBox">
            <img src={image}/>
            <div className="TextBox">
            <h2>{destination} ({days} Days)</h2>
            <p><i>{description}</i></p>
            <p>Price: {totalCost} € {" "} 
                {totalCost <= 350 && <span className="LabelBox GreatDeal">Great Deal</span>}
                {totalCost >= 1500 && <span className="LabelBox Premium">Premium</span>}
                {allInclusive && <span className="LabelBox AllInclusive">All Inclusive</span>}
            </p>
            <button className={`Button FavoriteButton ${colors[favoriteColorIndex]}`} onClick={handleFavorite}>
          ♡
        </button>
            <button className="Button" onClick={handleDelete}>Delete</button>
            </div>
            </div>
            )
    }
    

export default TravelPlanCard