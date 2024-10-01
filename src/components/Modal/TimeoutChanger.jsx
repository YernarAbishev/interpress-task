import {useState} from "react";

function TimeoutChanger({ selectedValue, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const breakOptions = [
        "Без перерыва", "0 мин", "5 мин", "10 мин", "15 мин", "20 мин", "25 мин", "30 мин"
    ];

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function selectOption(value) {
        onSelect(value);
        setIsOpen(false);
    }

    return (
        <div className="dropdown">
            <div className="select-dropdown" onClick={toggleDropdown}>
                {selectedValue === 0 ? "Без перерыва" : `${selectedValue} мин`}
                <span className="icon-line">
                    <span className="line-left"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </span>
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    {breakOptions.map((option, index) => (
                        <li key={index} onClick={() => selectOption(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TimeoutChanger;
