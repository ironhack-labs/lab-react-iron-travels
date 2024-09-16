import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";


function TravelPlans () {


    const [travelList,setTravelList] = useState(travelPlansData);

    const deleteTravel = travelId => {
        const filteredTravelList = travelList.filter(dest =>{
            return dest.id !== travelId
        });

        setTravelList(filteredTravelList)
    }
    

    const [favTravel,setFavtravel] = useState(null)
    
    const likeTravel = travelId => {
        const favTravelList = [];
        
        travelList.filter(dest =>{
            return dest.id === travelId && favTravelList.push(dest)
        });

        setFavtravel(favTravelList)
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <div style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
                {travelList && travelList.map((destination)=>{
                    return (
                        <TravelPlanCard key={destination.id} destination={destination} deleteTravel={deleteTravel} likeTravel={likeTravel}></TravelPlanCard>
                    )
                })}
            </div>
            <div style={{display: "flex", alignItems: "center", flexDirection:"column",textAlign: "center", marginLeft: "100px"}}>
                <h2>Favorites</h2>
                <div style={{display: "flex",alignItems: "center",flexDirection:"column", border: "1px solid black", padding: "10px"}}>
                    {favTravel && favTravel.map((destination) =>{
                        return (
                        <div>
                        <img src={destination.image} height={100} width={150}></img>
                        <h5>{destination.destination}{"("}{destination.days}days{")"}</h5>
                        <p><strong>Price: </strong>{destination.totalCost} €</p>
                    </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TravelPlans