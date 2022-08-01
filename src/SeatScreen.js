import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function SeatScreen() {
    const params = useParams();
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        const seatRequisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.id}/seats`);
        seatRequisition.then(response => {
            setSeats(response.data);
        })
    }, []);
    console.log(seats);

    return (
        <>
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
            <div className="padding"></div>
            <div className="name-cpf">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />
            </div>

            <div className="button">
                <p>Reservar assento(s)</p>
            </div>
            <div className="padding"></div>
        </>
    );
}