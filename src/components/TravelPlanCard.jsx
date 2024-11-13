import React from 'react'

const TravelPlanCard = ({ plan, handleDelete }) => {
	return (
		<div key={plan.id} className='box'>
			<img src={plan.image} alt='' />
			<div className='info-container'>
				<h3>
					{plan.destination} ({plan.days} Days)
				</h3>
				<p>
					{' '}
					<em>{plan.description}</em>{' '}
				</p>
				<p>
					<b>Price: </b>
					{plan.totalCost} €
				</p>
				{plan.totalCost <= 350 && (
					<p className='packs great-deal'>Great Deal</p>
				)}
				{plan.totalCost >= 1500 && (
					<p className='packs premium'>Premium</p>
				)}
				{plan.allInclusive && (
					<p className='packs all-inc'>All-Inclusive</p>
				)}
				<button
					className='delete'
					onClick={() => {
						handleDelete(plan.id)
					}}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default TravelPlanCard
