import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList(){
    const [country, setCountry] = useState(travelPlansData)
    // function to remove the country from list
    const remove = (countryId) =>{
        const newList = country.filter((el) =>{
            return el.id !==countryId;
        });
        setCountry(newList)
    }
    return(
        <div className="countries">
            {country.map(element=>{
                return(
                    <div key={element.id} className="country">
                        <img src={element.image} alt={element.destination} />
                        <div>
                            <h1>{element.destination}({element.days} Days)</h1>
                            <p>{element.description}</p>
                            <p><strong>Price:</strong>{element.totalCost}€</p>
                            <p className="labels">
                                <span className="label">{element.totalCost<350? "Great Deal": element.totalCost>1500? "Premium": ""}</span> 
                                <span className="label">{element.allInclusive?" All-Inclusive":""}</span>
                            </p>
                            <button onClick={()=>{remove(element.id)}}>delete</button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}