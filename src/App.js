import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import StartScreen from "./StartScreen";
import SessionScreen from "./SessionScreen";
import SeatScreen from "./SeatScreen";
import SucessScreen from "./SucessScreen";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/sessoes" element={<SessionScreen />} />
                <Route path="/assento" element={<SeatScreen />} />
                <Route path="/sucesso" element={<SucessScreen />} />
            </Routes>
        </BrowserRouter>
    );
}