import TravelPlansData from "./../../assets/travel-plans.json"
import { useState } from "react"
import travelList from "./travelList.css"


const TravelCard = () => {

    const [travelList, setTravel] = useState(TravelPlansData)

    const getLabel = (totalCost) => {
        if(totalCost <= 350){
            return "Great Deal"
        }
        else if(totalCost >= 1500){
            return "Premium"
        }
    }

    const deleteTravel = (travelIdToDelete) => {
        const filteredTravels = travelList.filter(elm =>{
            return elm.id !=travelIdToDelete
        }) 
        setTravel(filteredTravels)
    }

    const getLabelInclusive = (allInclusive) => {
        if(allInclusive){
            return "All Inclusive"
        }
    }
    
    return (
        travelList.map(TravelPlansData => (
        <div className = "TravelCard">
        <img src = {TravelPlansData.image} alt = "destination-image"/>
        <div className = "TravelCardText">
        <h2>{TravelPlansData.destination}({TravelPlansData.days} Days)</h2>
        <p>{TravelPlansData.description}</p>
        <p>Price: {TravelPlansData.totalCost}€</p>
        <p>{getLabel(TravelPlansData.totalCost)}</p>
        <p>{getLabelInclusive(TravelPlansData.allInclusive)}</p>
        <button className="btn-delete" onClick={() => deleteTravel(TravelPlansData.id)}>Delete </button>
        </div>
        </div>
        ))
    )
}


export default TravelCard