export default function TravelCard({
  destination,
  handleDelete,
  handleFavorite,
}) {
  return (
    <div>
      <div
        style={{
          width: "70vw",
          display: "flex",

          border: "1px solid",
          marginBottom: "5%",
        }}
      >
        <div>
          <img
            style={{ width: "25vw" }}
            src={destination.image}
            alt="destination image"
          />
        </div>
        <div
          style={{
            alignSelf: "center",
            marginLeft: "10%",
            justifySelf: "center",
            width: "100%",
          }}
        >
          <h2>
            {destination.destination}, ({destination.days} days)
          </h2>
          <p>{destination.description}</p>
          <br />
          <span>Price: {destination.totalCost}€</span>
          {destination.totalCost <= 350 && (
            <span
              style={{
                backgroundColor: "blue",
                borderRadius: "10%",
                padding: "3%",
              }}
            >
              Great deal
            </span>
          )}
          {destination.totalCost > 1500 && (
            <span
              style={{
                backgroundColor: "blue",
                borderRadius: "10%",
                padding: "3%",
              }}
            >
              Premium
            </span>
          )}
          {destination.allInclusive && (
            <span
              style={{
                backgroundColor: "blue",
                borderRadius: "10%",
                padding: "3%",
              }}
            >
              All-inclusive
            </span>
          )}
          <br />
          <button
            style={{ margin: "5%" }}
            onClick={() => handleDelete(destination.id)}
          >
            delete
          </button>
          <button
            style={{ margin: "5%" }}
            onClick={() => {
              handleFavorite(destination)
            }}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  )
}