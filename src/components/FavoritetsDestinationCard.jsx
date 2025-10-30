
function FavoritetsDestinationCard(props) {
    console.log(props.favoriteObj.destination)
  const divStyle = {
    border: '1px solid white',
    width: '350px',
    height: '200px'
  }
    return (
    <div style={divStyle}>
        <img style={{width:'100%',height:'52%',objectFit:'cover'}} src={props.favoriteObj.image} alt="" />
        <h3>{props.favoriteObj.destination}</h3>
        <p>{props.favoriteObj.totalCost} $</p>
    </div>
  )
}

export default FavoritetsDestinationCard
