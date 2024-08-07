import TravelPlansData from '../assets/travel-plans.json'
import { useState } from 'react';



function TravelList () {
   
    const [travelPlans, setTravelPlans] = useState(TravelPlansData)

    const deleteCard = (id) => {
        const updatedTravelPlansData = travelPlans.filter(plan => plan.id !== id);
    setTravelPlans(updatedTravelPlansData);
    }

    return(
        <div>
            {travelPlans.map( (element) => {
                return (
                    <section key={element.id} className='destinationCard'>
                        <div>
                            <img src={element.image} alt="Image" />
                        </div>
                        <div>
                            <h3>{element.destination} ({element.days} days)</h3>
                            <p>{element.description}</p>
                            <p><strong>Price: </strong>{element.totalCost} €</p>
                            {element.totalCost <= 350 && <p className="greatDeal">Great Deal</p>}
                            {element.totalCost >= 1500 && <p className="premium">Premium</p>}
                            {element.allInclusive && <p className="allInclusive">All Inclusive</p>}
                            <button className='deleteButton' onClick={() => {deleteCard(element.id)}}>Delete</button>
                        </div>
                    </section>
                )
            })}
        </div>
    );
    
    
}

export default TravelList;