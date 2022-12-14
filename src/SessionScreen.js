import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "./Footer";


export default function SessionScreen () {
    const params = useParams();
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        const sessionsRequisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`);
        sessionsRequisition.then((film) => {
            setSessions(film.data);
        });
    }, []);
    if (sessions.length === 0) {
        return <img src="" alt="none" />
    }
    const daysArray = [...sessions.days];
    return (
        <>
            <p className="title">Selecione o horário</p>
            <div className="padding"></div>
            <div className="time-selector">
                <><div className="sessions">
                    {daysArray.map((daysArray, index) =>
                        <><><h1>{daysArray.weekday} - {daysArray.date}</h1><div className="times">
                            {daysArray.showtimes.map((showtimes, index) =>
                                <Link to={`/assentos/${showtimes.id}`}>
                                    <p>{showtimes.name}</p>
                                </Link>
                            )}
                        </div></><div className="padding"></div></>

                    )}
                </div>
                    <div className="padding"></div>
                </>

            </div>
            <Footer movieName={sessions.title} img={sessions.posterURL}/>
        </>
    )
}