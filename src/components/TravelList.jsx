import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react";

function TravelList(){
    const [travels, setTravels] = useState(travelPlansData);

    const deleteTravel = travelId =>{
        const filteredTravels = travels.filter(travel => {
            return travel.id !== travelId;
        });
        setTravels(filteredTravels);
    }

    return(
        <div>
            <h2>Travel List</h2>
            {travels.map(travel => {
                return(
                    <div key={travel.id} className="travel-card" >
                        <img className="img" src={travel.image}/>
                         <h3>{travel.destination}</h3>
                         <p className="description" >{travel.description}</p>
                         <p className="price">Price: {travel.totalCost}€</p>

                         {travel.totalCost >= 1500 ? <p className="premium" >Premium </p> : null}
                         {travel.totalCost <= 350 ? <p className="great-deal"> Great Deal</p> : null }
                         {travel.allInclusive ? <p className="premium">All inclusive</p> : null}
                         
                         <button onClick={() => deleteTravel(travel.id) } className="btn-delete" >Delete</button>
                    </div>
                   
                )
            })}
        </div>
    )
}

export default TravelList;