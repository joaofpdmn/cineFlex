import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SessionScreen() {
    const params = useParams();
    const [sessions, setSessions] = useState([]);
    console.log(params);
    useEffect(() => {
        const sessionsRequisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`);
        console.log(params.id);
        sessionsRequisition.then((film) => {
            setSessions(film.data);
        });
    }, []);
    if (sessions.length === 0) {
        return <img src="" />
    }
    const daysArray = [...sessions.days];
    console.log(daysArray);
    return (
        <>
            <p className="title">Selecione o horário</p>
            <div className="padding"></div>
            <div className="time-selector">
                <><div className="sessions" >
                    {daysArray.map((daysArray, index) =>
                        <><><h1>{daysArray.weekday} - {daysArray.date}</h1><div className="times">
                            {daysArray.showtimes.map(showtimes =>
                                <Link to={`assento/${showtimes.id}`} >
                                    <p>{showtimes.name}</p>
                                </Link>
                            )}
                        </div></><div className="padding"></div></>

                    )}
                </div>
                    <div className="padding"></div>
                </>

            </div>
        </>
    )
}