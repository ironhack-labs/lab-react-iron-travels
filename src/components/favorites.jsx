function Favorites ({ favoritePlans  }){

    return (

        <div>
      <h2>Favorites</h2>

      {favoritePlans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.destination}</h3>
          <img src={plan.image} alt={plan.destination} />
        </div>
      ))}
    </div>
    )
}

export default Favorites