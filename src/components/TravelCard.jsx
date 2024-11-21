import "./TravelCard.css";

export default function TravelCard(props) {
	const {
		id,
		destination,
		image,
		days,
		allInclusive,
		totalCost,
		description,
		parts: [part],
	} = props.eachCard;
	// const removeItem = (id) => {
	// 	const thisCard = document.getElementById(id);
	// 	thisCard.remove();
	// };

	return (
		<article className="travel-card" id={id}>
			<div className="img">
				<img src={image} alt={destination} />
			</div>
			<div>
				<div className="plan">
					<h2>
						{destination} ({days} Days)
					</h2>
					<p className="description">{description}</p>
					<p className="price">
						<span>Price:</span> {totalCost} €
					</p>
					<div className="labels">
						{totalCost < 350 ? (
							<div className="great-deal">Great deal</div>
						) : (
							""
						)}
						{totalCost > 1500 ? <div>Premium</div> : ""}
						{allInclusive ? <div>All inclusive</div> : ""}
					</div>
				</div>
				<div className="footer-buttons">
					<button
						onClick={() => {
							props.removeCard(id);
						}}
					>
						Delete
					</button>
					<button
						onClick={() => {
							props.addFavourite(id);
						}}
					>
						♡
					</button>
				</div>
			</div>
		</article>
	);
}

/* 
  {
    "id": 1,
    "destination": "Paris, France",
    "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/paris.jpg",
    "days": 7,
    "allInclusive": true,
    "totalCost": 2200,
    "description": "Explore the romantic streets of Paris.",
    "parts": [
      {
        "name": "All-Inclusive Package",
        "description": "Includes flights, hotel, meals, entertainment, tours and tickets to tourist attractions.",
        "cost": 2200
      }
    ]
  },
*/
