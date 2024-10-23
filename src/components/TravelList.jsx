import React, { useState } from 'react'
import travelPlansData from '../assets/travel-plans.json'
import TravelPlanCard from './TravelPlanCard'
import './travel.css'

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData)
  const [favorites, setFavorites] = useState([])
  const [buttonColors, setButtonColors] = useState({}) // To track color for each travel plan
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

  const deleteItem = id => {
    const updatedPlans = plans.filter(item => item.id !== id)
    setPlans(updatedPlans)
  }

  const toggleFavorite = plan => {
    if (favorites.find(favorite => favorite.id === plan.id)) {
      setFavorites(favorites.filter(fav => fav.id !== plan.id))
    } else {
      setFavorites([...favorites, plan])
    }
  }

  const changeColor = id => {
    setButtonColors(prevColors => {
      const nextIndex =
        (colors.indexOf(prevColors[id] || 'purple') + 1) % colors.length
      return { ...prevColors, [id]: colors[nextIndex] }
    })
  }

  return (
    <div className='travel-list-container'>
      <div className='travel-list'>
        {plans.map(plan => (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            deleteItem={deleteItem}
            toggleFavorite={toggleFavorite}
            changeColor={changeColor}
            buttonColor={buttonColors[plan.id]}
          />
        ))}
      </div>

      <div className='favorites-list'>
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          favorites.map(fav => (
            <div key={fav.id} className='favorite-card'>
              <h3>{fav.destination}</h3>
              <p>{fav.description}</p>
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  )
}

export default TravelList
