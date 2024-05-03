import {useState} from "react"
import travelPlansData from "../assets/travel-plans.json"
import "./TravelList.css"

function TravelList(){
    const [travelList, setTravelList] = useState (travelPlansData)

    const deleteList = listId => {
        const filteredList = travelList.filter(list => {
          return list.id !== listId;
        });
     
        setTravelList(filteredList);
      };

    return(
        <div >
        {travelList.map(list => (
        <div key = {list.id } className="travelList"> 
            <img src={list.image} alt= "destination image" />
            <div className="travelListInfo">
                <h3>{list.destination}</h3>
                <p>{list.description}</p>
                <p><b>Price:</b> {list.totalCost} €</p>

                {list.totalCost <= 350 ? <p>Great Deal</p> : null}
                {list.totalCost >= 1500 ? <p>Premium</p> : null}
                {list.allInclusive ? <p>All-Inclusive</p> : null}

                <button onClick={() => deleteList(list.id)}className="btn-delete">Delete </button>

            </div>
        </div>  
        ))}

        </div>
    )
}

export default TravelList