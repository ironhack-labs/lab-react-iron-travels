import React from 'react'

const Label = ({ text, backgroundColor }) => {
    const label = {
        width: '100px',
        margin: '5px',
        borderRadius: '5px',
        paddingLeft: '20px',
        backgroundColor, 
        color: 'white',
        fontWeight: 'bold',

    }

    return (
        <div style={label}>{text}</div>
    )
}

export default Label