export default function Favorites({ favorites }) {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length ? (
        favorites.map((current) => (
          <div key={current.id}>
            <img
              src={current.image}
              alt=""
              style={{ width: "10vw", objectFit: "fill" }}
            />
            <h3>
              {current.destination}, ({current.days} Days)
            </h3>
            <p>{current.totalCost}€ </p>
          </div>
        ))
      ) : (
        <span>You haven`t added any favorites</span>
      )}
    </div>
  )
}