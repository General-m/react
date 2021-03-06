import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations'

export default function Cell(props) {
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

    return (

        <div className="cell" style={props.style} onClick={props.onClick} onChange={props.onChange}>{props.value} </div>

    )
}
