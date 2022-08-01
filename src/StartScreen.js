import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

const APIprefix = "https://mock-api.driven.com.br/api/v7/cineflex";

export default function StartScreen() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const moviesRequisition = axios.get(`${APIprefix}/movies`);
        moviesRequisition.then(response => {
            setMovies(response.data);
        });
    }, []);

    
    return (
        <>
            <p className="title">Selecione o filme</p>
            <div className="movie-scroll">
                <div key={movies.id}>
                    {movies.map(movies =>
                        <Link to={`sessoes/${movies.id}`}>
                            <img src={movies.posterURL} alt="movieimage" />
                        </Link>)}
                </div>
            </div>
        </>
    );
}