import React from "react";

export default function SessionScreen() {
    return (
        <>
            <div className="padding-header"></div>
            <p class="title">Selecione o horário</p>
            <div class="padding"></div>
            <div class="time-selector">
                <div class="sessions">
                    <h1>Quinta-feira - 24/06/2021</h1>
                    <div class="times">
                        <p>15:00</p>
                        <p>19:00</p>
                    </div>
                </div>
                <div class="padding"></div>
                <div class="sessions">
                    <h1>Sexta-feira - 24/06/2021</h1>
                    <div class="times">
                        <p>15:00</p>
                        <p>19:00</p>
                        <p>19:00</p>
                    </div>
                </div>
            </div>
        </>
    )
}