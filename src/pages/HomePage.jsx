import ModalWindow from "../components/Modal/ModalWindow";
import {useState} from "react";

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    function openModal () {
        setIsModalOpen(true);
    }
    function closeModal () {
        setIsModalOpen(false);
    }

    return (
        <section className="home-page">
            <div className="container">
                {isModalOpen && <ModalWindow closeModal={closeModal} />}
                <h1 className="title">Расписание</h1>
                <p className="description">Разработать модальное окно на React для формирования расписания курсов, включая отправку данных на бекэнд (вывод в консоль для демонстрации).</p>
                <button className="btn is-info" onClick={openModal}>Добавить расписание</button>
            </div>
        </section>
    );
}

export default HomePage;