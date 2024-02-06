import { useState } from "react";
import places from "../assets/travel-plans.json";

function TravelList(){

const [placesToDisplay, setPlacesToDisplay] = useState(places);

const deletePlace = (id) => {
    setPlacesToDisplay(placesToDisplay.filter(item => item.id !== id));
}
return(
    <section>

    {placesToDisplay.map((element) => {
    
        return(
    <div className= "destination-div" key={element.id}>
        <div className= "img"><img src={element.image}/></div>
        <div className="description">
        <h1>{element.destination}, ({element.days} days)</h1>
        <p>{element.description}</p>
        <p>Price: {element.totalCost} €</p>
        {element.totalCost <= 350 && <span  className="green-label">Great Deal</span>}
        {element.totalCost >= 1500 && <span className="blue-label">Premium</span>}
        {element.allInclusive && <span className="blue-label">All Inclusive</span>}
        <button onClick={() => {deletePlace(element.id)}}>Delete</button>
    </div>
    </div>
        )
    })}
    </section>

)

}

export default TravelList;