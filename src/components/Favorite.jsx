const Favorite = ({ favorite }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        marginBottom: "10px",
      }}
    >
      <img
        src={favorite.image}
        alt={favorite.destination}
        style={{
          width: "100%",
          maxHeight: "150px",
          objectFit: "cover",
        }}
      />
      <h4 style={{ marginTop: "0" }}>
        {favorite.destination} ({favorite.days} Days)
      </h4>
      <p>{favorite.totalCost}€</p>
    </div>
  );
};
export default Favorite;
