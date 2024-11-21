
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    const [travels, setTravels] = useState(travelPlansData);

    const handleDelete = (index) => {
        const updatedTravels = [...travels];
        updatedTravels.splice(index, 1);
        setTravels(updatedTravels);
    }

    return (
        <div className="container">
            {travels.map((element) => (
                <div className="card">
                    <img src={element.image} />

                    <div className="information">
                      
                        <h2>{element.destination}  ({element.days} days)</h2>
                        <h3>{element.description}</h3>
                        <h5>Price: {element.totalCost}€</h5>
                  
                            {element.totalCost > 350 ?
                                <span className="premium-label">Premium</span> :
                                <span className="great-label">Great Deal!</span>}

                            {element.allInclusive && <span className="inclusive-label">All-inclusive</span>}

                        
                    
                        <button onClick={()=> handleDelete(element.index)}>Delete</button>

                    </div>
                </div>

            ))}
        </div>
    );
}

