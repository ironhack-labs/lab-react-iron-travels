import "./TravelFavouriteCard.css";

export default function TravelFavouriteCard(props) {
	const {
		id,
		destination,
		image,
		days,
		allInclusive,
		totalCost,
		description,
	} = props.eachCard;
    
	return (
		<article className="travel-favourite-card" id={id}>
			<img src={image} alt={destination} />
			<div>
				<div className="favourite">
					<h2>
						{destination} ({days} Days)
					</h2>
					<p className="price">
						<span>Price:</span> {totalCost} €
					</p>
					
				</div>
				
			</div>
		</article>
	);
}
