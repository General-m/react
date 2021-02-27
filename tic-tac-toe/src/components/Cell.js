import React from 'react'

export default function Cell(props) {
    return (

        <div className="cell" onClick={props.onClick}>{props.value} </div>

    )
}
