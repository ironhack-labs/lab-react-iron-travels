import "./TravelList.css";

export function TravelPlanCard({ plan, onDelete, onFavorite, favoriteColor }) {
	return (
		<div className="travel-card">
			<img src={plan.image} alt={`picture of ${plan.destination}`} />
			<h3>
				{plan.destination} (Days: {plan.days})
			</h3>
			<div className="total-container">
				{plan.totalCost <= 350 && (
					<span className="label great-deal">Great Deal</span>
				)}
				{plan.totalCost >= 1500 && (
					<span className="label premium">Premium</span>
				)}
				{plan.allInclusive && (
					<span className="label all-inclusive">All Inclusive</span>
				)}
			</div>
			<h4>{plan.description}</h4>
			<p>Price: {plan.totalCost} €</p>
			<div className="buttons-container">
				<button onClick={() => onDelete(plan.id)}>Delete</button>
				{onFavorite && (
					<button
						style={{ backgroundColor: favoriteColor }}
						onClick={() => onFavorite(plan)}
					>
						♡
					</button>
				)}
			</div>
		</div>
	);
}
