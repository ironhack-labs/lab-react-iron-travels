import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {

    const [listedTravel, setListedTravel] = useState(travelPlansData)

    const handleDelete = (deleteIndex) => {
        const deletedTravel = listedTravel.slice(0)
        deletedTravel.splice(deleteIndex, 1)
    
        setListedTravel(deletedTravel)
      }

  return (
<div className= "travel-list">
    {listedTravel.map((eachTravel, index) => (
        
        <article key={index}  className="travel-card">
            <img src={eachTravel.image} alt={eachTravel.destination} />
            <section>
                <h2>{eachTravel.destination} ({eachTravel.days} days)</h2>
                <p>{eachTravel.description}</p>
                <p><b>Price: </b>{eachTravel.parts[0].cost}€</p>
                {eachTravel.parts[0].cost < 350 ? (<label className="label" style={{backgroundColor: 'darkgreen'}}> Great Deal </label>) : eachTravel.parts[0].cost > 1500 ? (<label className="label" style={{backgroundColor: 'purple'}}> Premium </label>)  : null}
                {eachTravel.allInclusive === true ? (<label className="label" style={{backgroundColor: 'blue'}}> All-Inclusive </label>) : null }
                
                <br /><button id="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </section>
        </article>
    ))}
    </div>
  )
}

export default TravelList
