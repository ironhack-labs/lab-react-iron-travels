import { FaRegTrashAlt } from 'react-icons/fa'

const TravelPlanCard = ({ plan, handleClick }) => {
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
							{')'}
						</h2>
						<p>{plan.description}</p>
						<p>Price: {plan.totalCost}</p>
						{plan.totalCost <= 350 && <p className="label">Great Deal</p>}
						{plan.totalCost >= 1500 && <p className="label">Premium</p>}
						{plan.allInclusive && <p className="label">All Inclusive</p>}{' '}
						<button onClick={() => handleClick(plan.id)}>
							<FaRegTrashAlt />
						</button>
					</div>
				</div>
			</li>
		</div>
	)
}

export default TravelPlanCard
