import './CardStudent.css'
import Modal from '../Modal/Modal'
import { useState } from 'react'

function CardStudent({surname, name, patr, gender, date, group}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className='scard' onClick={openModal}>
                <div className="sinfoLine">
                    <span>ФИО</span>
                    <p className='scardText'>{surname} {name} {patr}</p>
                </div>
                <div className="sinfoLine">
                    <span>Пол</span>
                    <p className='scardText'>{gender}</p>
                </div>
                <div className="sinfoLine">
                    <span>Дата рождения</span>
                    <p className='scardText'>{date}</p>
                </div>
                <div className="sinfoLine">
                    <span>Группа</span>
                    <p className='scardText'>{group}</p>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} 
            surname={surname} 
            name={name} 
            patr={patr}
            gender={gender}
            date={date}
            group={group}/>
        </div>
    )
}

export default CardStudent