import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';


export default function SessionScreen() {
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        const sessionsRequisition = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies/7/showtimes");
        sessionsRequisition.then(response => {
            setSessions(response.data);
        })
    }, []);

    console.log(sessions);
    return (
        <>
            <div className="padding-header"></div>
            <p className="title">Selecione o horário</p>
            <div className="padding"></div>
            <div className="time-selector">
                <div className="sessions">
                    <h1>Quinta-feira - 24/06/2021</h1>
                    <div className="times">
                        <p>15:00</p>
                        <p>19:00</p>
                    </div>
                </div>
                <div className="padding"></div>
                <div className="sessions">
                    <h1>Sexta-feira - 24/06/2021</h1>
                    <div className="times">
                        <p>15:00</p>
                        <p>19:00</p>
                        <p>19:00</p>
                    </div>
                </div>
            </div>
        </>
    )
}