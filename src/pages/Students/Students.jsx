import "./Students.css"
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardStudent from "../../components/CardStudent/CardStudent";
import items from "../../stores/students"
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

const Students = () => {
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
    
    const sortMethods = {
        none: [{ method: (x, y) => x.id - y.id }, {method: (item) => typeof item.id == typeof 1}],
        name: [{ method: (x, y) => x.surname.localeCompare(y.surname) }, {method: (x, y) => x.surname.localeCompare(y.surname)}],
        1: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П11")}],
        2: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П12")}],
        3: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П13")}],
        4: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П21")}],
        5: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П22")}],
        6: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П23")}],
        7: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П31")}],
        8: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П32")}],
        9: [{ method: (x, y) => x.id - y.id }, {method: (item => item.group == "П33")}],
    };

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
                        </select>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                            <option value="none">Группа</option>
                            <option value="1">П11</option>
                            <option value="2">П12</option>
                            <option value="3">П13</option>
                            <option value="4">П21</option>
                            <option value="5">П22</option>
                            <option value="6">П23</option>
                            <option value="7">П31</option>
                            <option value="8">П32</option>
                            <option value="9">П33</option>
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
                                        <TableCell align="left">Группа</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cardList.sort(sortMethods[sortState][0].method).filter(sortMethods[sortState][1].method).map((item) => (
                                        <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="left">{item.surname}</TableCell>
                                            <TableCell align="left">{item.name}</TableCell>
                                            <TableCell align="left">{item.patronymic}</TableCell>
                                            <TableCell align="left">{item.gender}</TableCell>
                                            <TableCell align="left">{item.birth_date}</TableCell>
                                            <TableCell align="left">{item.group}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="scards none" id="cards">
                        {cardList.sort(sortMethods[sortState][0].method).filter(sortMethods[sortState][1].method).map((item) => (
                            <CardStudent
                                surname={item.surname}
                                name={item.name}
                                patr={item.patronymic}
                                gender={item.gender}
                                date={item.birth_date}
                                group={item.group}
                                />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students;