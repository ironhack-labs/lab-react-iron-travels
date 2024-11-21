import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";
import "./TravelList.css";
import TravelFavouriteCard from "./TravelFavouriteCard";

export default function TravelList() {
	const [favourites, setFavourite] = useState([]);
	const [plans, setPlan] = useState(travelPlansData);

	const addToFavourites = (addId) => {
		//set the favourite - filter returns a new array, so we need to select only the object with [0]
		setFavourite([
			...favourites,
			travelPlansData.filter((plan) => plan.id === addId)[0],
		]);

		//update the travel plans
		setPlan(plans.filter((plan) => plan.id !== addId));
	};
    
	const removeItem = (id) => {
		setPlan(plans.filter((plan) => plan.id !== id));
	};

	return (
		<div className="lists">
			<div className="travel-list">
				{plans.map((travel, index) => {
					return (
						<TravelCard
							key={index}
							eachCard={travel}
							addFavourite={addToFavourites}
                            removeCard={removeItem}
						/>
					);
				})}
			</div>
			<div className="favourites-list">
				<h2>Favourites</h2>
				{favourites.map((travel, index) => {
					return <TravelFavouriteCard key={index} eachCard={travel} />;
				})}
			</div>
		</div>
	);
}
