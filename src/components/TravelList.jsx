import { useState } from 'react'
import travelPlansData from "./data/travel-plans.json";

const TravelList = () => {

    const [travels, setTRavels] = useState(travelPlansData)
    const [showTravels, setShowTRavels] = useState(true)

    const deleteTRavel = moveIdToDelete => {

        const filteredTravels = movies.filter(eachMovie => eachMovie._id != moveIdToDelete)
        setMovies(filteredMoves)
    }

}

export default TravelList


