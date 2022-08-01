import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import StartScreen from "./StartScreen";
import SessionScreen from "./SessionScreen";
import SeatScreen from "./SeatScreen";
import SucessScreen from "./SucessScreen";
import Header from "./Header";
import Footer from "./Footer";


export default function App() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/sessoes/:id" element={<SessionScreen />} />
                <Route path="/assento/:id" element={<SeatScreen />} />
                <Route path="/sucesso" element={<SucessScreen />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    );
}