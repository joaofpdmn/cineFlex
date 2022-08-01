import React from "react";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function RenderBall({ seatsArray, setBooked, bookedArray, setBookedArray, index }) {
    const [clicked, setClicked] = useState(false);
    const [color, setColor] = useState('');
    let seatBall;

    useEffect(() => {
        setColor((state) => clicked ? '#8DD7CF' : '#7B8B99');
    }, [clicked]);

    useEffect(() => {
        if (clicked === true) {
            setBookedArray([...bookedArray, index + 1])
        }
        else {
            setBooked(bookedArray.filter((value) => value !== seatsArray.name))

        }
    }, [clicked]);

    if (seatsArray.isAvailable === false) {
        seatBall = <Bolinha onClick={e => alert("Esse assento nao esta disponivel!")} color='#FBE192' >{seatsArray.name}</Bolinha>
    }
    else {
        seatBall = <Bolinha onClick={e => { setClicked(state => !state) }} color={color}> {seatsArray.name}</Bolinha>;
    }
    return seatBall;
}

const Bolinha = styled.button`
    background-color: ${props => props.color};
    border: 1px solid #808F9D;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 400;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    width: 26px;
    height: 26px;
    margin-inline-end: 7px;
    margin-block-end: 7px;
    columns: 10;
    orphans: 10;
`;