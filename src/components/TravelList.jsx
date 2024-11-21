import { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json";
import './TravelList.css'
import TravelCard from './TravelCard';


const TravelList = () => {

    const [travelPlans, setTravelPlans] = useState(travelPlansData)

    const deleteTravelPlans = idToDelete => {

        const filteredTravelPlans = travelPlans.filter(elm => elm.id != idToDelete)
        setTravelPlans(filteredTravelPlans)
        
    }


    return (

        <div className='TravelList' >

            {

                travelPlans.map(elm => {
                    return (
                        <TravelCard key={elm.id} {...elm} deleteTravelPlans={deleteTravelPlans} />
                    )
                })
            }

        </div>


    )
}

export default TravelList

