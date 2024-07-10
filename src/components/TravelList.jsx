import { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    //agrego el STATES desde el import de userState de React.
    const [ travel, setTravel ] = useState ( travelPlansData )

    const handleDelete = ( indexDelete ) => {

        const clone = JSON.parse( JSON.stringify( travel ))
        clone.splice(indexDelete, 1)
        setTravel ( clone )
    }

  return (
    <div className='travel-card'>
        { travel.map((eachTravel, index) => {
        return (
            <div className="card">
            <img src={eachTravel.image} alt={""} width={"250px"}/>
            <div className='textcard'>
            <h3>{eachTravel.destination}<span>{"("}{eachTravel.days}{" days)"}</span></h3>
            <p>{eachTravel.description}</p>
            <p>Price:<span>{eachTravel.totalCost}</span>€</p>
            {eachTravel.totalCost < 350 ? ( <span className="label">Gran Oferta</span> ) : null}
            {eachTravel.totalCost >= 1500 ? ( <span className="label">Premium</span> ) : null}
            {eachTravel.allInclusive === true ? ( <span className="label">All Inclusive</span> ) : null}
            <button onClick={ () => handleDelete(index) }>Delete</button>
            </div>
            </div>
            )
        })}
    </div>
  );
}

export default TravelList
