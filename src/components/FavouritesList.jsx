import FavouritesListCard from './FavouritesListCard';

const FavouritesList = ({ favouritePlans }) => {
	// const style = {
	// 	display: 'flex',
	// 	flexDirection: 'column',
	// 	justifyContent: 'flex-start',
	// 	alignItems: 'center',
	// };

	return (
		<div>
			<h2>Favourites</h2>
			<ul id='favouritesList'>
				{favouritePlans
					.filter(plan => plan.isFavourite)
					.map(plan => (
						<FavouritesListCard key={plan.id} plan={plan} />
					))}
			</ul>
		</div>
	);
};

export default FavouritesList;
