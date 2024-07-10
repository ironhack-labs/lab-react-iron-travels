import travelPlansData from '../assets/travel-plans.json'
import { useState } from 'react';


function TravelList() {
  
    const [destinos, setDestinos] = useState(travelPlansData);
    
    const handleDeleteDestino = (index) => {
        const clone = [...destinos]
        clone.splice(index,1)
        setDestinos(clone)
    }
    
    
    return (
    
        <div>

            {destinos.map((eachDestino, index) => {
                return(
                    <div  id='destinos-container'>
                        <img src={eachDestino.image} />
                        <div id="destino-info">
                            <p id='name-destino'>{eachDestino.destination} ({eachDestino.days} Days)</p>
                            <p id='description'>{eachDestino.description}</p>
                            <p><span>Price: </span>{eachDestino.totalCost} €</p>
                            <div id='labels'>
                                {eachDestino.totalCost <= 350 ? <label style={{backgroundColor: "rgb(56, 207, 61)", color: 'black'}}>Great Deal</label> : eachDestino.totalCost >= 1500 ? <label>Premium</label> : null}
                                {eachDestino.allInclusive === true ? <label>All Inclusive</label> : null}
                            </div>
                            <button onClick={() => {handleDeleteDestino(index)}}>Delete!</button>
                        </div>

                        

                    </div>
                )
            })}

        </div>

    )
}

export default TravelList;