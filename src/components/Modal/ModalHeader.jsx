function ModalHeader() {
    return (
        <>
            <span className="school-type">Школа "Мамыр"</span>
            <div className="group-color">
                <label htmlFor="group-color">Цвет группы</label>
                <div className="input-color">
                    <input id="group-color" type="color"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                         className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default ModalHeader;