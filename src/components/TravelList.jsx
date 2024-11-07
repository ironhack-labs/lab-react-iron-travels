import travelPlansData from "../assets/travel-plans.json";
import {useState} from "react"


function TravelList() {
    const [data, setData] = useState(travelPlansData);

    function deleteTravelPlan(plan) {
        const filterTravel = data.filter(object => object.id !== plan)
             
        return setData(filterTravel);
            
    }
        
    

    return (
        <>
        <div>{data.map((object) => {
            return (
                <>
                <div key={object.id}>
                    <h4>{object.destination} ({object.days} days)</h4>
                    <p>{object.description}</p>
                    <p>Price: ${object.totalCost}</p>
                    <div className="deal-tag">
                        {object.totalCost <= 350 && <p>Great Deal!</p>}
                        {object.totalCost >= 1500 && <p>Premium</p>}
                    </div>
                    <button onClick={()=> {deleteTravelPlan(object.id)}}>Delete</button>
                    <img src={object.image} alt="" />
                </div>
                </>
            )
        })} </div>
        </>
    )
}

export default TravelList;