import DropdownSelector from "./DropdownSelector";
import HourCounter from "./HourCounter";
import DateChanger from "./DateChanger";
import DayChanger from "./DayChanger";
import TimeoutChanger from "./TimeoutChanger";
import DayHourChanger from "./DayHourChanger";
import TimeChanger from "./TimeChanger";
import TeacherData from "./TeacherData";
import AudienceData from "./AudienceData";
import ModalHeader from "./ModalHeader";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios properly

function ModalWindow({ closeModal }) {
    const [hours, setHours] = useState(10);
    const [dayHours, setDayHours] = useState(1);
    const [breakDuration, setBreakDuration] = useState(0); // in minutes
    const [startTime] = useState("07:00");
    const [endTime, setEndTime] = useState("07:45");
    const today = new Date();
    const [dateFrom, setDateFrom] = useState(today.toLocaleDateString("ru-RU"));
    const [dateTo, setDateTo] = useState(new Date(today.setDate(today.getDate() + 6)).toLocaleDateString("ru-RU"));

    function handleIncrement() {
        setHours(prevHours => {
            const newHours = prevHours + 1;

            // Update dateTo by adding 2 days
            const currentDate = new Date(dateTo.split(".").reverse().join("-"));
            currentDate.setDate(currentDate.getDate() + 2);
            setDateTo(currentDate.toLocaleDateString("ru-RU"));

            return newHours;
        });
    }

    function handleDecrement() {
        setHours(prevHours => {
            if (prevHours > 0) {
                const newHours = prevHours - 1;

                const currentDate = new Date(dateTo.split(".").reverse().join("-"));
                currentDate.setDate(currentDate.getDate() - 2);

                const fromDate = new Date(dateFrom.split(".").reverse().join("-"));
                if (currentDate >= fromDate) {
                    setDateTo(currentDate.toLocaleDateString("ru-RU"));
                }

                return newHours;
            }
            return prevHours;
        });
    }

    function handleDayHourIncrement() {
        setDayHours(prevDayHours => prevDayHours + 1);
    }

    function handleDayHourDecrement() {
        setDayHours(prevDayHours => (prevDayHours > 0 ? prevDayHours - 1 : 0));
    }

    function handleSelectBreak(value) {
        const minutes = value === "Без перерыва" ? 0 : parseInt(value);
        setBreakDuration(minutes);
    }

    useEffect(() => {
        const [startHour, startMinute] = startTime.split(":").map(Number);
        const totalMinutes = dayHours * 45 + breakDuration;

        const endHour = Math.floor((startHour * 60 + startMinute + totalMinutes) / 60);
        const endMinute = (startHour * 60 + startMinute + totalMinutes) % 60;

        const formattedEndTime = `${String(endHour).padStart(2, "0")}:${String(endMinute).padStart(2, "0")}`;
        setEndTime(formattedEndTime);
    }, [dayHours, breakDuration, startTime]);

    async function handleSubmit() {
        const requestData = {
            hours,
            dayHours,
            breakDuration,
            startTime,
            endTime,
            dateFrom,
            dateTo,
        };

        try {
            const response = await axios.post("https://c4defa9cae7f8319.mokky.dev/schedule", requestData);
            if (response.status === 200 || response.status === 201) {
                alert("Данные успешно отправлены!");
                closeModal();
            } else {
                alert("Ошибка при отправке данных");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Произошла ошибка при отправке данных");
        }
    }

    return (
        <>
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-window">
                <div className="modal-window__header">
                    <h3 className="modal-window__title">Редактирование расписание</h3>
                    <span className="modal-window__close" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-x" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </span>
                </div>
                <div className="modal-window__body">
                    <div className="modal-window-body__header">
                        <ModalHeader />
                    </div>
                    <div className="modal-window-body__time">
                        <DropdownSelector />
                        <HourCounter hours={hours} onIncrement={handleIncrement} onDecrement={handleDecrement} />
                        <DateChanger dateFrom={dateFrom} dateTo={dateTo} />
                    </div>
                    <div className="modal-window-body__day">
                        <DayChanger />
                    </div>
                    <div className="modal-window-body__time">
                        <TimeoutChanger selectedValue={breakDuration} onSelect={handleSelectBreak} />
                        <DayHourChanger dayHours={dayHours} onIncrement={handleDayHourIncrement} onDecrement={handleDayHourDecrement} />
                        <TimeChanger dateFrom={startTime} dateTo={endTime} />
                    </div>
                    <div className="modal-window-body__teach">
                        <TeacherData />
                        <AudienceData />
                    </div>
                    <div className="alert is-danger">
                        Выбор <strong>преподавателя</strong> и <strong>аудитории</strong> не обязателен
                    </div>
                </div>
                <div className="modal-window__footer">
                    <span onClick={closeModal} className="link">Отмена</span>
                    <button onClick={handleSubmit} className="btn is-secondary-outline">Добавить расписание</button>
                </div>
            </div>
        </>
    );
}

export default ModalWindow;
