function TravelPlanCard({ plan }) {
  const { p, del, fav, col, chanCol} = plan;
  return (
    <div className="d-flex border rounded-2 m-2 p-2">
      <div className="p-2">
        <img src={p.image} alt={p.destination} />
      </div>
      <div className="d-flex flex-column justify-content-around text-start">
        <h5>{`${p.destination} (${p.days} Days)`}</h5>
        <p>
          <i>{p.description}</i> <br />
          <strong>Price:</strong> {p.totalCost}€ <br />
          {(p.totalCost <= 350)?<label>Great Deal</label>:null}
          {(p.totalCost >= 1500)?<label>Premium</label>:null}
          {(p.allInclusive)?<label>All-Inclusive</label>:null}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <button onClick={() => del(p.id)} className="btn text-white" type="button" style={{backgroundColor: col}}>Delete</button>
          <button onClick={() => {fav(p.id); chanCol()}} className="btn bg-secondary text-white" type="button">♡</button>
        </div>
      </div>
    </div>
  );
}

export default TravelPlanCard;