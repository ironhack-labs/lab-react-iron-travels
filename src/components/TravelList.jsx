import {useState} from 'react';

import travelPlansData from '/src/assets/travel-plans.json';

function TravelList (prop) {

    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deleteListing = (id) => {

        const refreshedList = travelPlans.filter(obj => {
            return obj.id !== id;
        })

        setTravelPlans(refreshedList);

    }

    return(

        travelPlans.map(plan => {

            return(

                <div className="TravelList" key={plan.id}>
                    <img src={plan.image} />
                    <div className="info">
                        <h3>{plan.destination} &#40;{plan.days} Days&#41;</h3>
                        <p><em>{plan.description}</em></p>
                        <p><b>Price:</b> {plan.totalCost} €</p>

                        {plan.totalCost <= 350 && <button className="green">Great Deal</button>}
                        {plan.totalCost >= 1500 && <button className="blue">Premium</button>}
                        {plan.allInclusive && <button className="blue">All-Inclusive</button>}
                        <button className="delete-btn" onClick={() => {deleteListing(plan.id)}}>Delete</button>

                    </div>   

                </div>
            ) 
        })
    )
    
}

export default TravelList;