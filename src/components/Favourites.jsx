function Favourites({ favouriteList }) {
  return (
    <div className="favouriteImg">
      {favouriteList.map((plan) => {
        return (
          <div key={plan.id}>
            <img src={plan.image} className="destinationImage"></img>
            <p>{plan.destination}</p>
            <span>{plan.days}</span>
            <p>{plan.description}</p>
            <p>Price:{plan.totalCost}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Favourites;
