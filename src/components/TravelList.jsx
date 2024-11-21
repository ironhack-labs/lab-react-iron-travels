import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList(){
    const [displayData, updateData] = useState(travelPlansData);

    function deleteItem(deleteitemID){
        let newData = displayData.filter(item => item.id !== deleteitemID)
        updateData(newData);
    }
    
    return (
        displayData.map(item => {
            return(
                <div className="destination" key={item.id}>
                    <img src={item.image}/>
                    <div className="details">
                        <h2>{item.destination} ({item.days} days)</h2>
                        <i>{item.description}</i>
                        <p><b>Price:</b> {item.totalCost} €</p>
                        <p>{item.totalCost >= 1500 && "Premium"}{item.totalCost <= 350 && "Great Deal"}</p>
                        {item.allInclusive && <p>"All-inclusive"</p>}
                        <button onClick={() => {deleteItem(item.id)}}>Delete</button>
                    </div>
                </div>
            )
        }
        )
    );
}

export default TravelList;


// Travel plans that cost 350 or less should have a label Great Deal.

// Travel plans that cost 1500 or more should have the label Premium.


// Additionally, if the travel plan includes an all-inclusive package (allInclusive property), render a label All Inclusive in addition to the cost label.

