import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

import React from 'react'

function TravelList() {

    const [travelData, setTravelData] = React.useState(travelPlansData)
    const [favorites, setFavorites] = React.useState([])

    console.log(travelData)

    const deleteTravelItem = (travelId) => {
        const filteredTravelItems = travelData.filter(item => {
            return item.id !== travelId
        })

        setTravelData(filteredTravelItems)
    }

    const addToFavorites = (item) => {
        const filteredTravelItems = travelData.filter(plan => {
            return plan.id !== item.id
        })
        setTravelData(filteredTravelItems)
        
        setFavorites((prevFavorites) => [
            ...prevFavorites,
            <TravelPlanCard plan={item} />
        ])
        

    }


  return (
    <>
        {travelData.map(item => {
            return (
                <div key={item.id} className="travel-card">
                    <img className="travel-img" src={item.image} alt="" srcset="" />
                    <div className="travel-text">
                        <h2>{item.destination} ({item.days} days)</h2>
                        <p>{item.description}</p>
                        <p><b>Price:</b> {item.totalCost} €</p>
                
                        {item.totalCost >= 1500 && <p className="blue-label">Premium</p>}
                        {item.allInclusive && <p className="blue-label">All-Inclusive</p>}
                        {item.totalCost <= 350 && <p className="green-label">Great deal</p>}
                        
                        <button onClick={() => deleteTravelItem(item.id)} type="button">Delete</button>
                        <button onClick={() => addToFavorites(item)} type="button">Heart</button>
                    </div>
                </div>
            )
        })}
        <div className="favorites">
            <h1>Favorites</h1>
            {favorites}

        </div>
        
    </>
  )
}

export default TravelList

/*
item = {
    allInclusive: true
    days: 7
    description: "Explore the romantic streets of Paris."
    destination: "Paris, France"
    id: 1
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/paris.jpg"
    parts: [{…}]
    totalCost: 2200
}
 
*/