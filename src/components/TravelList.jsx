import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { TravelPlanCard } from "./TravelPlanCard";
import "./TravelList.css";

export function TravelList() {
	const [removetravel, setRemovetravel] = useState(travelPlansData);
	const [favorites, setFavorites] = useState([]);
	const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
	const [colorIndex, setColorIndex] = useState(0);

	const travelDelete = (travelId) => {
		setRemovetravel(removetravel.filter((plan) => plan.id !== travelId));
		setFavorites(favorites.filter((plan) => plan.id !== travelId)); // también lo elimina de favoritos si estaba
	};

	const toggleFavorite = (plan) => {
		if (!favorites.find((f) => f.id === plan.id)) {
			setFavorites([...favorites, plan]);
		}
		setColorIndex((prev) => (prev + 1) % colors.length);
	};

	return (
		<div className="lists-container">
			<div className="travel-list">
				<h2>All Travels</h2>
				{removetravel.map((plan) => (
					<TravelPlanCard
						key={plan.id}
						plan={plan}
						onDelete={travelDelete}
						onFavorite={toggleFavorite}
						favoriteColor={colors[colorIndex]}
					/>
				))}
			</div>

			<div className="favorites-list">
				<h2>Favorites</h2>
				{favorites.map((plan) => (
					<TravelPlanCard
						key={plan.id}
						plan={plan}
						onDelete={(id) =>
							setFavorites(favorites.filter((f) => f.id !== id))
						}
						favoriteColor="red"
					/>
				))}
			</div>
		</div>
	);
}
