import TravelPlansData from "../assets/travel-plans.json"
import { useState } from "react"

function TravelList(){
    const [TravelPlans,SetTravelPlans] = useState(TravelPlansData)


    const deleteItem = (travelId) => {
        const newList = TravelPlans.filter(plans => plans.id !== travelId);
        SetTravelPlans(newList)

    }

    return (
        <>
        {TravelPlans.map(element => {
            return (
                <div className="travel" key={element.id}>
                    <img src={element.image} />
                    <div>
                    <h1>{element.destination} ({ element.days } Days )</h1>
                    <h3>{element.description}</h3>
                    <p>Price: {element.totalCost}</p>
                    <div className="extra-info">
                    {element.totalCost < 350
                        ? <p className="box1">Great Deal!</p>
                        : ""
                    }
                    {element.totalCost > 1500
                        ? <p className="box">PREMIUM!</p>
                        : ""
                    }
                    {element.allInclusive && <p className="box">{element.parts[0].name}</p>}
                    </div>
                    <button className="delButton" onClick={() => {deleteItem(element.id)}}>Delete</button>


                    </div>
                </div>
            )
        })}
        </>
    )
}

export default TravelList