const FavList = ({ favourites }) => {
  return (
    <div className="fav-list">
      <h2>❤️ Favourite Plans</h2>
      {favourites.length === 0 ? (
        <p>No favourite plans yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {favourites.map((item) => (
            <div key={item.id} className="card">
              <div>
                <img
                  src={item.image}
                  alt={item.destination}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="content">
                <p>
                  {item.destination} ({item.days} Days)
                </p>
                <p><strong>{item.totalCost} €</strong></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavList;
