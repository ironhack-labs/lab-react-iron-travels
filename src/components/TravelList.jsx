import travelPlansData from "/src/assets/travel-plans.json";
import { useState } from "react";

export default function TravelList(){
    const [displayedCard, setDisplayedCard] = useState(travelPlansData)

    function deleteTravelCard(travelID){
        const filList = displayedCard.filter(travelplan => travelplan.id !== travelID)
        setDisplayedCard(filList);
    }

    return(
        <section>
            {displayedCard.map((travelplan) => {
                return (
                    <div className="card" key={travelplan.id}>
                        <img src={travelplan.image} alt="" />
                        <h3>{travelplan.destination}</h3>
                        <p>{travelplan.description}</p>
                        <p>Price: {travelplan.totalCost} euro's {travelplan.allInclusive && "All inclusive"}</p>
                        {travelplan.totalCost < 350 && <p>Great Deal</p>}
                        {travelplan.totalCost > 1500 && <p>Premium</p>}
                        <button onClick={() => {deleteTravelCard(travelplan.id)}}>DELETE</button>
                    </div>
                )
            })}
            
        </section>
    )
}

