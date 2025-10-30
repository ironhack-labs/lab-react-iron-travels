import { useState } from 'react'
import travelPlansData from '../assets/travel-plans.json'
import { FaRegTrashAlt } from 'react-icons/fa'

const TravelList = () => {
	const [travelPlans, setTravelPlans] = useState(travelPlansData)

	const handleClick = (id) => {
		setTravelPlans(travelPlans.filter((t) => t.id !== id))
	}

	return (
		<div>
			{travelPlans.map((t) => (
				<li key={t.id}>
					<div className="container">
						<div>
							<img
								src={t.image}
								alt="Destination image"
								width="300"
								height="200"
							/>
						</div>
						<div className="data">
							<h2>
								{t.destination}
								{' ('}
								{t.days}
								{')'}
							</h2>
							<p>{t.description}</p>
							<p>Price: {t.totalCost}</p>
							{t.totalCost <= 350 && <p className="label">Great Deal</p>}
							{t.totalCost >= 1500 && <p className="label">Premium</p>}
							{t.allInclusive && <p className="label">All Inclusive</p>}{' '}
							<button onClick={() => handleClick(t.id)}>
								<FaRegTrashAlt />
							</button>
						</div>
					</div>
				</li>
			))}
		</div>
	)
}

export default TravelList
