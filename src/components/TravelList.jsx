import { useState } from 'react'
import travelPlansData from '../assets/travel-plans.json'
import TravelPlanCard from './TravelPlanCard'

const TravelList = () => {
	const [travelPlans, setTravelPlans] = useState(travelPlansData)
	const [favorites, setFavorites] = useState([])

	const handleClick = (id) => {
		setTravelPlans(travelPlans.filter((t) => t.id !== id))
	}
	const handleFav = (id) => {
		const favPlan = travelPlans.find((t) => t.id === id)
		setFavorites([...favorites, favPlan])
	}

	return (
		<div className="list">
			<div>
				{travelPlans.map((plan) => (
					<TravelPlanCard
						key={plan.id}
						plan={plan}
						handleClick={handleClick}
						handleFav={handleFav}
					/>
				))}
			</div>
			{favorites && (
				<div>
					<p>Favorites</p>
					{favorites.map((f) => (
						<li key={`favorites-${f.id}`}>
							<div className="fav">
								<img src={f.image} width="400" />
								<h2>
									{f.destination}
									{` (${f.days} Days)`}
								</h2>
								<p>{f.totalCost}</p>
							</div>
						</li>
					))}
				</div>
			)}
		</div>
	)
}

export default TravelList
