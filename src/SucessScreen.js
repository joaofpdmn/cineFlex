import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function SucessScreen() {
    const final = {
        ids: [1, 2, 3],
        name: "Fulano",
        cpf: "12345678900"
    };
    useEffect(() => {
        
        const bookRequisition = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", final);
        
    }, []);
    console.log({final});
    return (
        <>
            <div className="padding-header"></div>
            

            <p className="final-title">Pedido feito com sucesso!</p>
            <div className="padding"></div>

            <div className="ticket">
                <div>
                    <h1>blabla</h1>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
                <div>
                    <h1>Filme e sessão</h1>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
                <div>
                    <h1>Filme e sessão</h1>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
            </div>
            <div className="button">Voltar pra Home</div>
            <div className="padding"></div>
        </>
    )
}