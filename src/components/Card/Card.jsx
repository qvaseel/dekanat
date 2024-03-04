import './Card.css'

function Card({imgUrl, surname, name, patr, gender, date, phone, category, salary, cathedra}) {
    return (
        <div className='card'>
            <img className='cardImg' src={imgUrl} alt="" />
            <div className="info">
                <div className="infoLine">
                    <span>ФИО</span>
                    <p className='cardText'>{surname} {name} {patr}</p>
                </div>
                <div className="infoLine">
                    <span>Пол</span>
                    <p className='cardText'>{gender}</p>
                </div>
                <div className="infoLine">
                    <span>Дата рождения</span>
                    <p className='cardText'>{date}</p>
                </div>
                <div className="infoLine">
                    <span>Телефон</span>
                    <p className='cardText'>{phone}</p>
                </div>
                <div className="infoLine">
                    <span>Категория</span>
                    <p className='cardText'>{category}</p>
                </div>
                <div className="infoLine">
                    <span>Зарплата</span>
                    <p className='cardText'>{salary}</p>
                </div>
                <div className="infoLine">
                    <span>Кафедра</span>
                    <p className='cardText'>{cathedra}</p>
                </div>
            </div>
        </div>
    )
}

export default Card