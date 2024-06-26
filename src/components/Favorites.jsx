import { useState } from "react";

const Favorites = ({ favoriteItems }) => {

    return (
        <div className="favorites-list">
            <h2>Favorites</h2>
            <ul>
            {favoriteItems.map(item => (
                <li>
                    <img src={item.image} alt={item.destination}/>
                    <h3>{item.destination} ({item.days} Days)</h3>
                    <h3>{item.totalCost} €</h3>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Favorites;