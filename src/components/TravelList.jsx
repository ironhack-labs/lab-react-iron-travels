import { useState } from "react"
import DestinationCard from "./DestinationCard"
import travelPlansData from "../assets/travel-plans.json"
import FavoritesDestination from "./FavoritesDestination"
import FavoritetsDestinationCard from "./FavoritetsDestinationCard"


function TravelList() {
    const [destinationArr,setDestinationArr] = useState(travelPlansData)
    const[favArr,setFavArr] = useState([])

    const handleRemoveTravel = (indexToDelete) => {
        const arrCopy = [...destinationArr]
        arrCopy.splice(indexToDelete,1)
        setDestinationArr(arrCopy)
    }
    const handleAddFaverotiteTravel = (indexToAdd) => {
      const favArrCopy = [...favArr]
      favArrCopy.push(destinationArr[indexToAdd])
      setFavArr(favArrCopy)
      const arrCopy = [...destinationArr]
      arrCopy.splice(indexToAdd,1)
      setDestinationArr(arrCopy)
    }
  return (
    <div style={{display:'flex', gap:'50px'}}> 
        <div>
        {destinationArr.map((eachDestination,index)=> {
            return (
            <>
              <DestinationCard
                key={index}
                destinationImg={eachDestination.image}
                destination={eachDestination.destination}
                days={eachDestination.days}
                description={eachDestination.description}
                totalCost={eachDestination.totalCost}
                isAllInclusive={eachDestination.allInclusive}
                onDelete={() => handleRemoveTravel(index)}
                onAddFav={()=> handleAddFaverotiteTravel(index)}
              />
            </>
            );
        })}
        </div>
        <div>
          <FavoritesDestination {...travelPlansData} />
          {favArr.map((eachFavorite)=> {
            return(
              <>
                <FavoritetsDestinationCard
                  favoriteObj={eachFavorite}
                />
              </>
            )

          })}
            
        </div>
    </div>
  )
}

export default TravelList
