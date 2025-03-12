import { useState } from "react"

export const FavCard = (props) => {
    const [fav, setFav] = useState(props.favorites);
    
  return (
    <article className="fav-item">
      <div className="fav-image-container">
        <img src={fav.image} alt={fav.destination} className="fav-image"/>
      </div>
      <div className="fav-text-container">
        <h4>{fav.destination}</h4>
        <p>{fav.totalCost}</p>
      </div>

    </article>
  )
}
