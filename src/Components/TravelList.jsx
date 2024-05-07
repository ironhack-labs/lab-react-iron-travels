import travelPlansData from '../assets/travel-plans.json'
import "../styles/TravelList.css"
import { useState } from 'react'
function TravelList() {
    const [travels, setTravels] = useState(travelPlansData);
    
const deleteTravel = travelId => {
    const filteredTravel = travels.filter(travel => travel.id !== travelId);
    setTravels(filteredTravel);
}


return (
    <>
        {travels.map((travel) => {
            
            return (
                <div key={travel.id} className='travelcard'>
                    <h3>{travel.destination} ({travel.days} days)</h3>
                    <p><i>{travel.description}</i></p>
                    <p>Price: {travel.totalCost} €</p>
                    {travel.totalCost <= 350 && <label>Great Deal</label>}
                    {travel.totalCost >= 1500 && <label>Premium </label>}
                    {travel.allInclusive && <label htmlFor="">All inclusive</label>}
                    <button onClick={() => deleteTravel(travel.id)}>Delete</button>
                    <img src={travel.image} alt="photo" />




                </div>
            )
        })

        }
    </>
)


}
export default TravelList