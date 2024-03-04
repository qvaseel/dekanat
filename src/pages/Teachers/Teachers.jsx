import "./Teachers.css"
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import items from "../../stores/teachers";
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from "../../components/Card/Card";
import { useEffect } from "react";

const filterCards = (searchText, listOfCards) => {
    if (!searchText) {
      return listOfCards;
    }
    return listOfCards.filter(({ surname }) =>
      surname.toLowerCase().includes(searchText.toLowerCase())
    );
}

const data = items;

const Teachers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cardList, setCardList] = useState(data);

    useEffect(() => {
        const Debounce = setTimeout(() => {
          const filteredCards = filterCards(searchTerm, data);
          setCardList(filteredCards);
        }, 300);
    
        return () => clearTimeout(Debounce);
      }, [searchTerm]);

    const [sortState, setSortState] = useState("none");

    const sortMethods = {
        none: [{ method: (x, y) => x.id - y.id }, {method: (item) => typeof item.id == typeof 1}],
        salary: [{ method: (x, y) => Number(x.salary.slice(0, -1)) - Number(y.salary.slice(0, -1)) }, {method: (item) => typeof item.id == typeof 1}],
        name: [{ method: (x, y) => x.surname.localeCompare(y.surname) }, {method: (x, y) => x.surname.localeCompare(y.surname)}],
        fith: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра физической культуры")}],
        ped: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра педагогики и психологии")}],
        math: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра математики и информатики")}],
        ling: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра лингвистики и межкультурной коммуникации")}],
        gum: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра гуманитарных дисциплин")}],
        diz: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра дизайна")}],
        man: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра менеджмента")}],
        eco: [{ method: (x, y) => x.id - y.id }, {method: (item => item.cathedra == "Кафедра экономики и финансов")}],
        assist: [{ method: (x, y) => x.id - y.id }, {method: (item => item.degree == "ассистент")}],
        prepod: [{ method: (x, y) => x.id - y.id }, {method: (item => item.degree == "преподаватель")}],
        stprepod: [{ method: (x, y) => x.id - y.id }, {method: (item => item.degree == "ст. преподаватель")}],
        docent: [{ method: (x, y) => x.id - y.id }, {method: (item => item.degree == "доцент")}],
        prof: [{ method: (x, y) => x.id - y.id }, {method: (item => item.degree == "профессор")}],
    };
    
    const [tableActive, setTableActive] = useState(true);
    
    function Switch(e) {
        let tableBtn = document.getElementById('tableBtn')
        let cardsBtn = document.getElementById('cardsBtn')
        let table = document.getElementById('table');
        let cards = document.getElementById('cards');
        if (tableActive) {
            table.classList.toggle('none');
            cards.classList.toggle('none');
            tableBtn.classList.toggle('activeButton')
            cardsBtn.classList.toggle('activeButton')
            setTableActive(false);
        } else {
            table.classList.toggle('none');
            cards.classList.toggle('none');
            tableBtn.classList.toggle('activeButton')
            cardsBtn.classList.toggle('activeButton')
            setTableActive(true);
        }
    }

    return (
        <div>
            <Header onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="flex">
                <LeftSide/>
                <div className="container" id="full">
                    <div className="filter flex2">
                        <div className="order flex2">
                            <p>Упорядочить: </p>
                            <div className="buttons flex2">
                                <button onClick={Switch} id="tableBtn" className="tableBtn activeButton">Таблица</button>
                                <button onClick={Switch} id="cardsBtn" className="cardsBtn">Карточки</button>
                            </div>
                        </div>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                            <option value="none">Сортировать по:</option>
                            <option value="name">Фамилии</option>
                            <option value="salary">Зарплате</option>
                        </select>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                            <option value="none">Кафедра</option>
                            <option value="fith">Кафедра физической культуры</option>
                            <option value="ped">Кафедра педагогики и психологии</option>
                            <option value="math">Кафедра математики и информатики</option>
                            <option value="ling">Кафедра лингвистики</option>
                            <option value="gum">Кафедра гуманитарных дисциплин</option>
                            <option value="diz">Кафедра дизайна</option>
                            <option value="man">Кафедра менеджмента</option>
                            <option value="eco">Кафедра экономики и финансов</option>
                        </select>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                            <option value="none">Категория</option>
                            <option value="assist">Ассистент</option>
                            <option value="prepod">Преподаватель</option>
                            <option value="stprepod">Старший преподаватель</option>
                            <option value="docent">Доцент</option>
                            <option value="prof">Профессор</option>
                        </select>
                    </div>
                    <div className="table" id="table">
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Фамилия</TableCell>
                                        <TableCell align="left">Имя</TableCell>
                                        <TableCell align="left">Отчество</TableCell>
                                        <TableCell align="left">Пол</TableCell>
                                        <TableCell align="left">Дата рождения</TableCell>
                                        <TableCell align="left">Телефон</TableCell>
                                        <TableCell align="left">Категория</TableCell>
                                        <TableCell align="left">Зарплата</TableCell>
                                        <TableCell align="left">Кафедра</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {cardList.sort(sortMethods[sortState].method).map((item) => ( */}
                                    {cardList.sort(sortMethods[sortState][0].method).filter(sortMethods[sortState][1].method).map((item) => (
                                        <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="left">{item.surname}</TableCell>
                                            <TableCell align="left">{item.name}</TableCell>
                                            <TableCell align="left">{item.patronymic}</TableCell>
                                            <TableCell align="left">{item.gender}</TableCell>
                                            <TableCell align="left">{item.birth_date}</TableCell>
                                            <TableCell align="left">{item.phone}</TableCell>
                                            <TableCell align="left">{item.degree}</TableCell>
                                            <TableCell align="left">{item.salary}</TableCell>
                                            <TableCell align="left">{item.cathedra}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="cards none" id="cards">
                    {cardList.sort(sortMethods[sortState][0].method).filter(sortMethods[sortState][1].method).map((item) => (
                            <Card imgUrl={item.photo}
                                surname={item.surname}
                                name={item.name}
                                patr={item.patronymic}
                                gender={item.gender}
                                date={item.birth_date}
                                phone={item.phone}
                                category={item.degree}
                                salary={item.salary}
                                cathedra={item.cathedra}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers;