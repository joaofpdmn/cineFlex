import React from "react";
import Footer from "./Footer";

export default function SucessScreen() {
    return (
        <>
            <div className="padding-header"></div>
            <div class="name-cpf">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />
            </div>

            <div class="button">
                <p>Reservar assento(s)</p>
            </div>
            <div class="padding"></div>

            <p class="final-title">Pedido feito com sucesso!</p>
            <div class="padding"></div>

            <div class="ticket">
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
                <div>
                    <h1>Filme e sessão</h1>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
            </div>
            <div class="button">Voltar pra Home</div>
            <div class="padding"></div>
            <div class="padding-footer"></div>
            <Footer />
        </>
    )
}