import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import RenderBall from "./RenderBall";
import Caption from "./Caption";
import Footer from "./Footer"
import Forms from "./Forms";



export default function SeatScreen() {
    const params = useParams();
    const [seats, setSeats] = useState([]);
    const [booked, setBooked] = useState(true);
    const [bookedArray, setBookedArray] = useState([]);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');


    useEffect(() => {
        const seatRequisition = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.id}/seats`);
        seatRequisition.then(response => {
            setSeats(response.data);
            console.log(response.data);
        })
    }, []);
    if (seats.length === 0) {
        return <img src="" />
    }
    const seatsArray = [...seats.seats];
    console.log(seats);

    const final = {
        ids: [...bookedArray],
        name: [...name],
        cpf: [...cpf],
        movieTitle: seats.movie.title, 
        time: seats.name,
        weekDay: seats.day.weekday,
        date: seats.day.date,
    };
    console.log(final);

    function finalRender(final) {
        const bookRequisition = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", final);
        bookRequisition.then(() => {
            navigate('/sucesso', {state: {final}});
        })
    }

    return (
        <>
            <p className="title">Selecione o assento</p>
            <div className="padding"></div>
            <div className="seat-selector">
                <div className="seat-map">
                    {seatsArray.map((seatsArray, index) => <RenderBall seatsArray={seatsArray} booked={booked} setBooked={setBooked} bookedArray={bookedArray} setBookedArray={setBookedArray} index={index} />)}
                </div>
            </div>
            <Caption />
            <div className="padding"></div>
            <Forms name={name} setName={setName} cpf={cpf} setCpf={setCPF}/>
            <div className="button" onClick={() => finalRender(final)}>
                <p>Reservar assento(s)</p>
            </div>
            <div className="padding"></div>
            <Footer movieName={seats.movie.title} weekDay={seats.day.weekday} time={seats.name} img={seats.movie.posterURL} />
        </>
    );
}

