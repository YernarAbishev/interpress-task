function HourCounter({ hours, onIncrement, onDecrement }) {
    return (
        <div className="hour-counter">
            <span className="hour-counter__action radius-left" onClick={onDecrement}>-</span>
            <span className="hour-counter__data">{hours}</span>
            <small className="hour-counter__label"><span>Всего</span> <span>часов</span></small>
            <span className="hour-counter__action radius-right" onClick={onIncrement}>+</span>
        </div>
    );
}

export default HourCounter;
