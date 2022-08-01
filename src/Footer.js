import React from "react";

export default function Footer({movieName, weekDay, time, img}) {
    return (
        <>
            <div className="padding"></div>
            <div className="padding-footer"></div>
            <div className="footer">
                <img src={img} alt="ticketimg" />
                <div>
                    <p>{movieName}</p>
                    <p>{weekDay} - {time}</p>
                </div>
            </div>
        </>
    )
}