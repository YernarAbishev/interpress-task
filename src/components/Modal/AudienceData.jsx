import {useState} from "react";

function AudienceData() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Аудитория");

    function toggleDropdown() {
        return setIsOpen(!isOpen);
    }

    function selectOption(value) {
        setSelectedValue(value);
        setIsOpen(false);
    }


    return (
        <div className="dropdown">
            <div className="select-dropdown" onClick={toggleDropdown}>
                {selectedValue}
                <span className="icon-line">
                    <span className="line-left"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li onClick={() => selectOption("101")}>101</li>
                    <li onClick={() => selectOption("102")}>102</li>
                </ul>
            )}
        </div>
    );
}

export default AudienceData;