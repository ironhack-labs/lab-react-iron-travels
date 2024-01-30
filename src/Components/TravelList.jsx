import React from 'react'
import Card from './Card'

const TravelList = ({ travel, onHandleDelete }) => {
  return (
    <Card
      id={travel.id}
      image={travel.image}
      destination={travel.destination}
      days={travel.days}
      description={travel.description}
      totalCost={travel.totalCost}
      onHandleDelete={onHandleDelete}
     />
  )
}

export default TravelList