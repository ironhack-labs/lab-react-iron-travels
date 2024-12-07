import React from "react"
import DeleteButton from "./DeleteButton"

function Favorites({ favorites, onDelete }) {
  
  
  return (
    <div >
      <h2 >Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          <div key={fav.id} className="favorite-item">
             <div className="favorite-image">
              <img src={fav.image} alt={fav.destination}  />
              <DeleteButton onDelete={() => onDelete(fav.id)} />
            </div>
            <div className="favorite-info">
              
            <h4>{fav.destination}</h4>
            <p>{fav.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  )
}

export default Favorites