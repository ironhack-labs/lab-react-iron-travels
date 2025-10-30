import { useState } from "react"

useState
function DestinationCard(props) {
    const mainDivStyle = {
        display: 'flex',
        width: '700px',
        height: '240px',
        border: '1px solid white',
        gap: '40px',
        textAlign: 'start',
        padding: '30px',
        marginTop: '20px'
    }
    const labelPriceStyle = {
        backgroundColor: 'darkblue',
        width: '90px',
        padding: '4px',
        textAlign: 'center',
        borderRadius: '4px'
    }
  return (
    <div style={mainDivStyle}>
        <div>
            <img style={{width:'350px', height:'220px'}} src={props.destinationImg} alt="" />
        </div>
        <div>
            <h3>{props.destination} {props.days} days</h3>
            <p>{props.description}</p>
            <p>Price: {props.totalCost} $</p>
            <div style={{display:'flex',gap:'10px'}}>
                {props.totalCost <= 350?(
                    <p style={{...labelPriceStyle,backgroundColor:'darkgreen'}}>Great Deal</p>
                    ) :props.totalCost >= 1500?(
                    <p style={labelPriceStyle}>Premium</p>
                    ): null}
                {props.isAllInclusive?(
                    <p style={labelPriceStyle}>All-inclusive</p>
                ):null}
            </div>
            <button onClick={props.onDelete}>Delete</button>
            <button onClick={props.onAddFav}style={{marginLeft:'10px'}}>&#x2665;</button>
        </div>
    </div>
  )
}

export default DestinationCard
