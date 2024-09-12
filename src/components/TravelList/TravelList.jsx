import './TravelList.css'
import travelPlansData from './../../assets/travel-plans.json'
import { useState } from 'react'


const TravelList = () => {

    const [travelPlans, setTravelPlan] = useState(travelPlansData)

    const greatDeal = 350
    const premium = 1000

    return (
        <article className='travel-list'>


            <div className='travel.plans'>
                {travelPlans.map(plan => (

                    <div key={plan.id} className='travel-plan'>
                        <img src={plan.image} alt={plan.destination} />
                        <div className='plan-details'>
                            <h2>{plan.destination}</h2>
                            <p>{plan.description}</p>
                            <p><strong>Price:</strong> {plan.totalCost}</p>
                            {plan.totalCost <= greatDeal && (
                                <p className='great-deal'>Great Deal </p>
                            )}
                            {plan.totalCost >= premium && (
                                <p className='premium'>Premium</p>
                            )}
                            {plan.allInclusive && (
                                <p className='allinclusive'> Allinclusive</p>
                            )}

                        </div>
                    </div>

                )

                )}

            </div>

        </article>


    )





}
export default TravelList