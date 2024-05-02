import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList () {
    const [data, setData] = useState(travelPlansData);


    return ( <>
    
    {data.map( (travel, index)=> {
        const labelDeal = travel.totalCost <= 350
        const labelPrenium = travel.totalCost >= 1500
        return (
        <div className="card" key={travel.id}>
    <img src={travel.image} alt="" />
    <div className="texte">
    <h1>{travel.destination} ({travel.days} Days)</h1>
    <h2>{travel.description}</h2>
    <p>Price : {travel.totalCost}€</p>
    {labelDeal && <div className="greatDeal">Great Deal</div>}
    {labelPrenium && <div className="prenium">Prenium</div>}
    <button className="btnDelete" onClick={ () => {
        const newTravel = data.filter((_, indix) => index !== indix);

    setData(newTravel)
    }}>Delete</button>
    </div>
  
    </div>
   ) }
)}
</>
)
}

export default TravelList