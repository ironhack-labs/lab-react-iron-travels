import { useState } from 'react'
import travelPlansData from '../assets/travel-plans.json'
import TravelPlanCard from './TravelPlanCard'

const TravelList = () => {
	const [travelPlans, setTravelPlans] = useState(travelPlansData)

	const handleClick = (id) => {
		setTravelPlans(travelPlans.filter((t) => t.id !== id))
	}

	return (
		<div>
			{travelPlans.map((plan) => (
				<TravelPlanCard key={plan.id} plan={plan} handleClick={handleClick} />
			))}
		</div>
	)
}

export default TravelList
