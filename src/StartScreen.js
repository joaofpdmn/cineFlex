import React from "react";

export default function StartScreen() {
    return (
        <>
            <div class="header">
                <p>cineflex</p>
            </div>
            <div class="padding-header"></div>
            <p class="title">Selecione o filme</p>
            <div class="movie-scroll">
                <img src="./assets/img/movieimage.png" alt="movieimage" />
                <img src="./assets/img/movieimage.png" alt="movieimage" />
                <img src="./assets/img/movieimage.png" alt="movieimage" />
                <img src="./assets/img/movieimage.png" alt="movieimage" />
            </div>
        </>
    );
}