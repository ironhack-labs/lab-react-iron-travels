
import React from 'react'

const Delete = ({ id, onHandleDelete }) => {

    const deleteButtonStyle = {
        border: '1px solid black',
        paddingLeft: '10px',
        paddingRight: '10px',
    }

  return (
    <button style={deleteButtonStyle} onClick={() => onHandleDelete(id)}>Delete</button>
  )
}

export default Delete