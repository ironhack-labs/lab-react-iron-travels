import { useState } from "react"
import "./travel-list.css"
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./travel-plan-card";


function TravelList () {

    const [travelPlans, setTravelPlans] = useState(travelPlansData)
    const [favs, setFavs] = useState([])

    function handleDelete (id) {
        setTravelPlans (travelPlans.filter((plan) => plan.id !== id))
    }
    function handleFav (plan) {
    if (!favs.find((f) => f.id === plan.id)) {
      setFavs([...favs, plan]);
    }}


    return (
    <div className="targets">
        <div className="travels">
            {travelPlans.map((plan) => (
                <div className="cards" key={plan.id}>
                    <div className="cardContent">
                        <TravelPlanCard 
                            plan={plan} />
                        <div>
                            <button className="btnDel" onClick={()=> handleDelete(plan.id)}>DELETE</button>
                        </div> 
                        <div>
                            <button className="btnFav" onClick={()=> handleFav(plan)}>♡</button>
                        </div> 
                    </div>
                    
                    

                </div>
            ))}
        </div>
        <div className="travelsFav">
            <h2>MIS FAVORITOS</h2>
            {favs.map((plan) => (
                <div className="cards" key={plan.id}>
                    <div className="cardContent">
                        <TravelPlanCard 
                            plan={plan} />
                    </div>   
                                                       
                </div>
            ))}
        </div>


    </div>
        
        
        
    )
}

export default TravelList