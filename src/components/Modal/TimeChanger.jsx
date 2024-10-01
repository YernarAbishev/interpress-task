function TimeChanger({ dateFrom, dateTo }) {
    return (
        <div className="date-changer">
            <span className="date-changer__from">{dateFrom}</span>
            <span className="date-changer__label">до</span>
            <span className="date-changer__to">{dateTo}</span>
        </div>
    );
}

export default TimeChanger;
