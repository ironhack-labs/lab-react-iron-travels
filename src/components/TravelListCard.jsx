function TravelListCard(props){

    const {location, remove} = props;

        return (
            <div key={location.id} className='card-container'>

                    <img className="card-images" src={location.image}/>

                <div className="card-description">
                    <h2>{location.destination} {location.days} Days</h2>
                    <p>{location.description}</p>
                    <p><b>Price:</b> {location.totalCost} €</p>

                    <div className="card-tags">
                        {location.totalCost <= 350 ? <p className="tag"><b>Great Deal</b></p> : null}
                        {location.totalCost > 1500 ? <p className="tag"><b>Premium</b></p> : null}
                        {location.allInclusive === true ? <p className="tag"><b>All inclusive</b></p>:null}
                    </div>

                    <button onClick={()=>remove(location.id)}>Delete</button>
                </div>
            </div>
        )
}

export default TravelListCard;