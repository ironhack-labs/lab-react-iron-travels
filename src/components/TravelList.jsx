import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
	const [travelPlans, setTravelPlans] = useState(travelPlansData);

	const deleteTravelPlan = (id) => {
		const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
		setTravelPlans(updatedPlans);

		const allInclusivePlans = updatedPlans.filter((plan) => plan.allInclusive);
		const totalCost = allInclusivePlans.reduce(
			(acc, plan) => acc + plan.totalCost,
			0
		);
	};
	return (
		<div>
			<h1>Travel Plans</h1>
			{travelPlans.map((plan) => (
				<div
					key={plan.id}
					className="travel-plan"
					style={{
						border: "1px solid #ccc",
						margin: "10px",
						padding: "10px",
					}}
				>
					<h2>
						{plan.destination} ({plan.days} days)
					</h2>
					<img
						src={plan.image}
						alt={plan.destination}
						style={{
							width: "300px",
							height: "auto",
							borderRadius: "8px",
							position: "left",
						}}
					/>
					<p>{plan.description}</p>

					<p>
						<strong>Price:</strong> €{plan.totalCost}
					</p>
					<div>
						{plan.totalCost <= 350 && (
							<button style={{ backgroundColor: "lightblue" }}>
								Great Deal
							</button>
						)}
						{plan.totalCost >= 1500 && (
							<button style={{ backgroundColor: "green" }}>Premium</button>
						)}
					</div>
					<div>
						{plan.allInclusive ? (
							<button style={{ backgroundColor: "green", color: "white" }}>
								All Inclusive
							</button>
						) : (
							<button style={{ backgroundColor: "gray", color: "white" }}>
								Not all inclusive
							</button>
						)}
					</div>
					<p>
						<button onClick={() => deleteTravelPlan(plan)}>Delete</button>
					</p>
				</div>
			))}
		</div>
	);
}

export default TravelList;
