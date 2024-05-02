import "./TravelList.css";
function TravelList(props) {
  return props.planList.map((list) => {
    return (
      <div className="lists">
        <div className="divisions" key={list.id}>
          <img src={list.image} alt="" />

          <article>
            <h2>{list.destination}</h2>
            <span>{`(${list.days} Days)`}</span>
            <br></br>
            <p>{list.description}</p>
            <br></br>
            <p>Price:</p>
            <span className="price">{`${list.totalCost} Euros`}</span>
            {list.totalCost < 350 && (
              <label className="greatDeal">Great Deal</label>
            )}
            {list.totalCost > 1500 && (
              <label className="premium">Premium</label>
            )}
            {list.parts.name === "All-Inclusive Package" && (
              <label>All-Inclusive</label>
            )}
            <button onClick={() => props.onDelete(list.id)}>Delete</button>
          </article>
        </div>
      </div>
    );
  });
}
export default TravelList;
