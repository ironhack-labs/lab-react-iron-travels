import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelPlanCard (props) {

    const {destination, deleteTravel, likeTravel} = props;

    return (

        <div style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
        
                <div key={destination.id} style={{display:"flex",border:"2px solid black", alignItems: "center", marginBottom: "10px", width: 600,padding: "20px"}}>
                    <div>
                        <img src={destination.image} height={300} width={350}></img>
                    </div>
                    <div>
                        <h3>{destination.destination}{"("}{destination.days}days{")"}</h3>
                        <p>{destination.description}</p>
                        <p><strong>Price: </strong>{destination.totalCost} €</p>
                        <div>
                            <p>
                            {destination.totalCost > 1500 && <span style={{backgroundColor: "blue", borderRadius:"5px",color:"white",margin: "10px",padding: "10px"}}><strong>Premium</strong></span>}
                            {destination.totalCost < 350 && <span style={{backgroundColor: "green", borderRadius:"5px",margin: "10px", padding: "10px"}}><strong>Great Deal</strong></span>}
                            {destination.allInclusive && <span style={{backgroundColor: "blue", borderRadius:"5px",color:"white",margin: "10px", padding: "10px"}}><strong>All-Inclusive</strong></span>}
                            </p>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div style={{margin: "10px"}}>
                                <button className="btn-delete" style={{backgroundColor: "grey"}} onClick={()=> deleteTravel(destination.id)}>Delete</button>
                            </div>
                            <div style={{margin: "10px"}}>
                                <button className="btn-like" style={{backgroundColor: "grey"}} onClick={()=> likeTravel(destination.id)}>♡</button>
                            </div>
                        </div>
                    </div>

                </div>
            
        </div>
    )
}

export default TravelPlanCard