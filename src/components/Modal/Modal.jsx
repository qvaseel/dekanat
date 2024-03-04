import "./Modal.css"

const Modal = ({ isOpen, onClose, surname, name, patr, gender, date, group }) => {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    if (!isOpen) {
        return null;
    }
    return (
        <div className="wrapper_modal">
            <div className="modal">
                <button className="modalClose" onClick={onClose}></button>
                <div className="modal-content">
                    <div className="modalInfo">
                        <div className="minfoLine">
                            <span>ФИО</span>
                            <p className='mcardText'>{surname} {name} {patr}</p>
                        </div>
                        <div className="minfoLine">
                            <span>Пол</span>
                            <p className='mcardText'>{gender}</p>
                        </div>
                        <div className="minfoLine">
                            <span>Дата рождения</span>
                            <p className='mcardText'>{date}</p>
                        </div>
                        <div className="minfoLine">
                            <span>Группа</span>
                            <p className='mcardText'>{group}</p>
                        </div>
                    </div>
                    <div className="modalSessia">
                        <p className="modText">Результаты сессии:</p>
                        <p className="modSemestr">1 семестр</p>
                        <div className="msinfoLine">
                            <p className='mscardText'>Предмет</p>
                            <p className='mscardText'>Преподаватель</p>
                            <p className='mscardText'>Оценка</p>
                        </div>
                        <div className="msinfoLine">
                            <p className='mscardText'>Математика</p>
                            <p className='mscardText'>Сидорова Е.П.</p>
                            <p className='mscardText'>{getRandomIntInclusive(2, 5)}</p>
                        </div>
                        <div className="msinfoLine">
                            <p className='mscardText'>Русский язык</p>
                            <p className='mscardText'>Лебедева М.А.</p>
                            <p className='mscardText'>{getRandomIntInclusive(2, 5)}</p>
                        </div>
                        <div className="msinfoLine">
                            <p className='mscardText'>ОБЖ</p>
                            <p className='mscardText'>Смирнов А.Н.</p>
                            <p className='mscardText'>{getRandomIntInclusive(2, 5)}</p>
                        </div>
                        <div className="msinfoLine">
                            <p className='mscardText'>Информатика</p>
                            <p className='mscardText'>Сидорова Е.П.</p>
                            <p className='mscardText'>{getRandomIntInclusive(2, 5)}</p>
                        </div>
                        <div className="msinfoLine">
                            <p className='mscardText'>История</p>
                            <p className='mscardText'>Смирнов А.Н.</p>
                            <p className='mscardText'>{getRandomIntInclusive(2, 5)}</p>
                        </div>
                        <div className="msinfoLine">
                            <p className='mscardText'>Иностранный язык</p>
                            <p className='mscardText'>Козлов Д.С.</p>
                            <p className='mscardText'>{getRandomIntInclusive(2, 5)}</p>
                        </div>
                        <div className="msinfoLine">
                            <p className='mscardText'>Физ-ра</p>
                            <p className='mscardText'>Иванов И.И.</p>
                            <p className='mscardText'>{getRandomIntInclusive(2, 5)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;