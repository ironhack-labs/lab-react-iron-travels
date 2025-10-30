import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'

const TravelPlanCard = ({ plan, handleClick, handleFav }) => {
	const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
	const [color, setColor] = useState('purple')

	const colIndex = () => {
		return Math.floor(Math.random() * colors.length)
	}
	const handleFavClick = (id) => {
		setColor(colors[colIndex()])
		handleFav(id)
	}
	return (
		<div>
			<li key={plan.id}>
				<div className="container">
					<div>
						<img
							src={plan.image}
							alt="Destination image"
							width="300"
							height="200"
						/>
					</div>
					<div className="data">
						<h2>
							{plan.destination}
							{' ('}
							{plan.days}
							{' Days)'}
						</h2>
						<p>{plan.description}</p>
						<p>Price: {plan.totalCost}</p>
						{plan.totalCost <= 350 && <p className="label">Great Deal</p>}
						{plan.totalCost >= 1500 && <p className="label">Premium</p>}
						{plan.allInclusive && <p className="label">All Inclusive</p>}{' '}
						<button onClick={() => handleClick(plan.id)}>
							<FaRegTrashAlt />
						</button>
						<button
							className={`btn btn-${color}`}
							onClick={() => handleFavClick(plan.id)}
						>
							<FaRegHeart />
						</button>
					</div>
				</div>
			</li>
		</div>
	)
}

export default TravelPlanCard
