import { useState } from 'react'
import travelPlansData from '../../assets/travel-plans.json'

const TravelList = () => {

    const [travels, setTravels] = useState(travelPlansData)

    return (
        <div className='TravelList'>


        </div>
    )
}

export default TravelList