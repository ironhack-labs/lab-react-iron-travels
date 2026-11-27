import { useState } from "react"
import "./travel-plan-card.css"

function TravelPlanCard ({plan, handleDelete, handleFavorite}) {


    const buttonColors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [indexColor, setIndexColor] = useState(0)

    const buttonStyle = {
        backgroundColor: buttonColors[indexColor % buttonColors.length],
    }


    return <li className="destination">
            
            <img className="img" src={plan.image} />
            <div className="info">
                <p className="days"> {plan.destination} ({plan.days} Days)</p>
                <p className="description">{plan.description}</p>
                <p className="cost"><span>Price:</span> {plan.totalCost} €</p>
                <div> 
                    {plan.totalCost < 350 && <label className="greatDeal"> Great Deal</label>}
                    {plan.totalCost > 1500 && <label className="premium"> Premium </label>}
                    {plan.allInclusive && <label className="allInclusive"> All-Inclusive </label>}
                </div> 
                <div className="buttons">
                    <button className="deleteButton" onClick={() => handleDelete(plan.id)}> Delete </button>
                    <button onClick={() => {setIndexColor(indexColor + 1); handleFavorite(plan.id)}} style={buttonStyle} > ♡ </button>
                </div>
                    
            </div>
        
        </li>
}

export default TravelPlanCard