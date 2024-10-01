import { useState } from "react";

function DayHourChanger({ dayHours, onIncrement, onDecrement }) {
    return (
        <div className="hour-counter">
            <span className="hour-counter__action radius-left" onClick={onDecrement}>-</span>
            <span className="hour-counter__data">{dayHours}</span>
            <small className="hour-counter__label"><span>Часов</span> <span>в день</span></small>
            <span className="hour-counter__action radius-right" onClick={onIncrement}>+</span>
        </div>
    );
}

export default DayHourChanger;
