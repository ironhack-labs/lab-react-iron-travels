function TravelPlanCard(props) {
  const {
    i,
    plan: { image, name, destination, totalCost, description },
    handleDelete,
  } = props
  return (
    <div
      style={{
        border: '1px solid black',
        display: 'flex',
        marginBottom: '20px',
        width: '600px',
      }}
    >
      <p></p>
      <img
        style={{ width: '250px', height: '200px', padding: '20px' }}
        src={image}
        alt={name}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <h2>{destination}</h2>
        <p style={{ margin: '0' }}>{description}</p>
        <p style={{ margin: '0', padding: '15px 0' }}>
          <strong>Price:</strong> {totalCost}€
        </p>
        {totalCost <= 350 ? (
          <span
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            Great Deal
          </span>
        ) : totalCost >= 1500 ? (
          <span
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            Premium
          </span>
        ) : (
          ''
        )}
        <div>
          <button
            style={{ backgroundColor: 'grey', margin: '20px 0 10px' }}
            onClick={() => handleDelete(i)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default TravelPlanCard
