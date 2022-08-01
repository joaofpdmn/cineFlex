import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';

export default function SucessScreen() {
    const { state } = useLocation();
    const { final } = state;
    const navigate = useNavigate();

    return (
        <><div className="padding-header"></div><p className="final-title">Pedido feito com sucesso!</p><div className="padding"></div><div className="ticket">
            <div>
                <h1>Filme e sessão</h1>
                <p>{final.MovieTitle}</p>
                <p>{final.date} - {final.time}</p>
            </div>
            <div>
                <h1>Ingressos</h1>
                {final.ids.map(ids =>[
                    <p>Assento {ids}</p>
                ])}
            </div>
            <div>
                <h1>Comprador</h1>
                <p>{final.name}</p>
                <p>CPF: {final.cpf}</p>
            </div>
        </div><div className="button" onClick={() => navigate('/')} >Voltar pra Home</div><div className="padding"></div></>
    )
}