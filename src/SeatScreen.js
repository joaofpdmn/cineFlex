import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function SeatScreen() {
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        const seatRequisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/showtimes/12/seats");
        seatRequisition.then(response => {
            setSeats(response.data);
        })
    }, []);
    console.log(seats);

    return (
        <>
            <div className="padding-header"></div>
            <p className="title">Selecione o assento</p>
            <div className="padding"></div>
            <div className="seat-selector">
                <div className="seat-map">
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                    <p>01</p>
                </div>
            </div>
            <div className="caption">
                <div className="selected">
                    <p className="circle"></p>
                    <h6>Selecionado</h6>
                </div>
                <div className="avaliable">
                    <p className="circle"></p>
                    <h6>Disponível</h6>
                </div>
                <div className="not-avaliable">
                    <p className="circle"></p>
                    <h6>Indisponível</h6>
                </div>
            </div>
        </>
    );
}