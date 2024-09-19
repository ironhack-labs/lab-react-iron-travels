
function TravelPlanCard({ plan, onDelete, onFavorite }) {

  const { id, destination, days, description, totalCost, image, allInclusive } = plan


  return (
    <div key={id} className="travel-item">

          <>
            <img src={image} style={{ width: '300px', height: 'auto' }} />
          </>

          <div className="travel-info">
              <h3>{destination} ({days} Days)</h3>
              <p>{description}</p>
              <p>
                    Price: €{totalCost}
              </p>
            
              <div className="tag-container">
                
                  {totalCost <= 350 && <span className="tag great-deal">Great Deal</span>}
                  {totalCost >= 1500 && <span className="tag premium">Premium</span>}
                  {allInclusive && <span className="tag all-inclusive">All-Inclusive</span>}
                
              </div>
              <div className="delete-container"> 
                <button className="delete-button" onClick={onDelete}>Delete</button>
              </div>

              <div className="fav-container"> 
                <button onClick={() => onFavorite(plan)} className="favorite-btn">♡</button>
              </div>
          </div>

        </div>
  )
}

export default TravelPlanCard