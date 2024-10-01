import {useState} from "react";

function DayChanger() {
    const [activeDays, setActiveDays] = useState([]);

    function toggleDay(day) {
        setActiveDays(prevActiveDays =>
            prevActiveDays.includes(day)
                ? prevActiveDays.filter(d => d !== day)
                : [...prevActiveDays, day]
        );
    }

    function selectGroup(days) {
        setActiveDays(days);
    }

    const daysMap = [
        { label: 'Пн/Ср/Пт', group: ['Пн', 'Ср', 'Пт'], className: 'day-changer__three' },
        { label: 'Вт/Чт', group: ['Вт', 'Чт'], className: 'day-changer__two' },
    ];

    const individualDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    return (
        <div className="day-changer">
            {daysMap.map((group, index) => (
                <span
                    key={index}
                    className={group.className}
                    onClick={() => selectGroup(group.group)}
                >
                    {group.label}
                </span>
            ))}
            {individualDays.map((day, index) => (
                <span
                    key={index}
                    className={`day-changer__day ${activeDays.includes(day) ? 'active-day' : ''}`}
                    onClick={() => toggleDay(day)}
                >
                    {day}
                </span>
            ))}
        </div>
    );
}

export default DayChanger;