import './Header.css'
import Button from '../Button/Button'
import React, { useState } from 'react';
import Moment from "react-moment";
import profile from "../../img/profile.svg"
import search from "../../img/searh.svg"
import Exit from '../Exit/Exit';

function Header({onChange}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isShow, setIsShow] = useState(true);
    const Show = () => {
        let item = document.getElementById('leftSide');
        let cont = document.getElementById('full');
        console.log(item)
        if (isShow) {
            item.classList.add('none')
            cont.classList.toggle('full')
            setIsShow(false);
        } else {
            item.classList.remove('none')
            cont.classList.toggle('full')
            setIsShow(true);
        }
        console.log(isShow)
    }

    return (
        <div className='header'>
            <div className='panel'>
                <Button classBtn="btnHeader" onClick={Show}></Button>
                <p className='panelText'>Панель управления</p>
            </div>
            <div className="search">
                <div className="input">
                    <input type="text"
                    autoComplete='off' 
                    placeholder='Поиск...' 
                    className='inpHeader' 
                    onChange={onChange}/>
                </div>
                <div className="icon">
                    <img className='searchImg' src={search} alt="search" />
                </div>
            </div>
            
            <div className='panel2'>
                <Moment className='moment' format="HH:mm" interval={1000}/>
                <img onClick={openModal} className="profile" src={profile} alt="profile" />
                <Exit isOpen={isModalOpen} onClose={closeModal}/>
            </div>
            
        </div>
    )
}

export default Header