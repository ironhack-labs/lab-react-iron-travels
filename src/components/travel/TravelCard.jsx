import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const TravelCard = ({item, handleDelete, handleFavorite, style}) => {
  return (
    <>
    <img src={item.image} alt={item.name} />
          <div className="articleContainer">
            <article>
              <h3>
                {item.destination} ({item.days})
              </h3>
              <p id="description">{item.description}</p>
              <p>
                <span>Price:</span> {item.totalCost}€
              </p>
              {item.totalCost <= 350 && <span id="greatDeal">Great Deal</span>}
              {item.totalCost >= 1500 && <span id="premium">Premium</span>}
              {item.allInclusive && <span id="premium">All-Inclusive</span>}
            </article>
            <div className="btnContainer">
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            <FontAwesomeIcon icon={faHeart} style={style} onClick={()=>handleFavorite(item)} />
            </div>
          </div>
    </>
  )
}
export default TravelCard