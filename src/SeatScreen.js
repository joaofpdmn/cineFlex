import React from "react";

export default function SeatScreen() {
    return (
        <>
            <div className="padding-header"></div>
            <p class="title">Selecione o assento</p>
            <div class="padding"></div>
            <div class="seat-selector">
                <div class="seat-map">
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
            <div class="caption">
                <div class="selected">
                    <p class="circle"></p>
                    <h6>Selecionado</h6>
                </div>
                <div class="avaliable">
                    <p class="circle"></p>
                    <h6>Disponível</h6>
                </div>
                <div class="not-avaliable">
                    <p class="circle"></p>
                    <h6>Indisponível</h6>
                </div>
            </div>
        </>
    );
}