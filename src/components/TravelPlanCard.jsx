export default function TravelPlanCard ({ item, deleteItem, addFavourite, color }) {
    return (
      <>
        <div className="offer" key={item.id}>
          <div className="img-container">
            <img
              src={item.image}
              alt={item.destination}
              className="offer-img"
            />
          </div>
          <div className="text-container">
            <h3>
              {item.destination} ({item.days} Days)
            </h3>
            <p>{item.description}</p>
            <p>
              <b>Price</b>: {item.totalCost}€
            </p>
            <div className="label-container">
              {item.totalCost <= 350 && (
                <div className="label great-deal">Great Deal</div>
              )}
              {item.totalCost >= 1500 && (
                <div className="label premium">Premium</div>
              )}
              {item.allInclusive && (
                <div className="label all-inc">All Inclusive</div>
              )}
            </div>
            <div className="btn-container">
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
                className="delete-btn"
              >
                Delete
              </button>
              <button style={{backgroundColor: color}}
                onClick={() => {
                  addFavourite(item.id);
                }}
                id="fav-btn"
              >
                ♡
              </button>
            </div>
          </div>
        </div>
      </>
    );
}