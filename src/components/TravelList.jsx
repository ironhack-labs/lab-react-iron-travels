import React from 'react'
import travelPlansData from '../assets/travel-plans.json'
import { useState } from 'react'
import TravelPlanCard from './TravelPlanCard'

const TravelList = () => {
	let [plans, setPlans] = useState(travelPlansData)
	function handleDelete(id) {
		let newPlans = plans.filter((plan) => plan.id !== id)
		setPlans(newPlans)
	}
	return plans.map((plan) => {
		return <TravelPlanCard plan={plan} handleDelete={handleDelete} />
	})
}

export default TravelList
