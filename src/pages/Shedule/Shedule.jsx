import "./Shedule.css"
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide/LeftSide";
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from "../../components/Card/Card";
import items from "../../stores/shedule"
import { useEffect } from "react";
const Shedule = () => {
    const [sortState, setSortState] = useState("11");

    const sortMethods = {
        "11": {method: (item => item.group == "11")},
        "12": {method: (item => item.group == "12")},
        "13": {method: (item => item.group == "13")},
        "21": {method: (item => item.group == "21")},
        "22": {method: (item => item.group == "22")},
        "23": {method: (item => item.group == "23")},
        "31": {method: (item => item.group == "31")},
        "32": {method: (item => item.group == "32")},
        "33": {method: (item => item.group == "33")},
    };

    function Back() {
        const groups = document.getElementById('groups');
        const shedule = document.getElementById('shedule');
        groups.classList.toggle('none');
        shedule.classList.toggle('none');
    }

    function showShedule(event) {
        console.log(items)
        const btn = event.target;
        const sort = btn.getAttribute("data_group")
        setSortState(sort)
        console.log(sortState)
        const groups = document.getElementById('groups');
        const shedule = document.getElementById('shedule');
        groups.classList.toggle('none');
        shedule.classList.toggle('none');
    }
    return (
        <div>
            <Header/>
            <div className="flex">
                <LeftSide/>
                <div className="container" id="full">
                    <div className="shedule none" id="shedule">
                        <div className="back">
                            <button className="backBtn" id="back" onClick={Back}></button>
                            <p>Вернуться к списку групп</p>
                        </div>
                        <div className="cont_shed">
                            {items.filter(sortMethods[sortState].method).map((item) => (
                              <div className="sheduleCards">
                                <div className="cardShedule">
                                    <p className="weekday">{item.shedule[0].day}</p>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[0].lessons[0].num}</p>
                                        <p>{item.shedule[0].lessons[0].name}</p>
                                        <p>{item.shedule[0].lessons[0].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[0].lessons[1].num}</p>
                                        <p>{item.shedule[0].lessons[1].name}</p>
                                        <p>{item.shedule[0].lessons[1].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[0].lessons[2].num}</p>
                                        <p>{item.shedule[0].lessons[2].name}</p>
                                        <p>{item.shedule[0].lessons[2].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[0].lessons[3].num}</p>
                                        <p>{item.shedule[0].lessons[3].name}</p>
                                        <p>{item.shedule[0].lessons[3].teacher}</p>
                                    </div>
                                </div>
                                <div className="cardShedule">
                                    <p className="weekday">{item.shedule[1].day}</p>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[1].lessons[0].num}</p>
                                        <p>{item.shedule[1].lessons[0].name}</p>
                                        <p>{item.shedule[1].lessons[0].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[1].lessons[1].num}</p>
                                        <p>{item.shedule[1].lessons[1].name}</p>
                                        <p>{item.shedule[1].lessons[1].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[1].lessons[2].num}</p>
                                        <p>{item.shedule[1].lessons[2].name}</p>
                                        <p>{item.shedule[1].lessons[2].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[1].lessons[3].num}</p>
                                        <p>{item.shedule[1].lessons[3].name}</p>
                                        <p>{item.shedule[1].lessons[3].teacher}</p>
                                    </div>
                                </div>
                                <div className="cardShedule">
                                    <p className="weekday">{item.shedule[2].day}</p>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[2].lessons[0].num}</p>
                                        <p>{item.shedule[2].lessons[0].name}</p>
                                        <p>{item.shedule[2].lessons[0].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[2].lessons[1].num}</p>
                                        <p>{item.shedule[2].lessons[1].name}</p>
                                        <p>{item.shedule[2].lessons[1].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[2].lessons[2].num}</p>
                                        <p>{item.shedule[2].lessons[2].name}</p>
                                        <p>{item.shedule[2].lessons[2].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[2].lessons[3].num}</p>
                                        <p>{item.shedule[2].lessons[3].name}</p>
                                        <p>{item.shedule[2].lessons[3].teacher}</p>
                                    </div>
                                </div>
                                <div className="cardShedule">
                                    <p className="weekday">{item.shedule[3].day}</p>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[3].lessons[0].num}</p>
                                        <p>{item.shedule[3].lessons[0].name}</p>
                                        <p>{item.shedule[3].lessons[0].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[3].lessons[1].num}</p>
                                        <p>{item.shedule[3].lessons[1].name}</p>
                                        <p>{item.shedule[3].lessons[1].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p>{item.shedule[3].lessons[2].num}</p>
                                        <p>{item.shedule[3].lessons[2].name}</p>
                                        <p>{item.shedule[3].lessons[2].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[3].lessons[3].num}</p>
                                        <p>{item.shedule[3].lessons[3].name}</p>
                                        <p>{item.shedule[3].lessons[3].teacher}</p>
                                    </div>
                                </div>
                                <div className="cardShedule">
                                    <p className="weekday">{item.shedule[4].day}</p>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[4].lessons[0].num}</p>
                                        <p>{item.shedule[4].lessons[0].name}</p>
                                        <p>{item.shedule[4].lessons[0].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[4].lessons[1].num}</p>
                                        <p>{item.shedule[4].lessons[1].name}</p>
                                        <p>{item.shedule[4].lessons[1].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[4].lessons[2].num}</p>
                                        <p>{item.shedule[4].lessons[2].name}</p>
                                        <p>{item.shedule[4].lessons[2].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[4].lessons[3].num}</p>
                                        <p>{item.shedule[4].lessons[3].name}</p>
                                        <p>{item.shedule[4].lessons[3].teacher}</p>
                                    </div>
                                </div>
                                <div className="cardShedule">
                                    <p className="weekday">{item.shedule[5].day}</p>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[5].lessons[0].num}</p>
                                        <p>{item.shedule[5].lessons[0].name}</p>
                                        <p>{item.shedule[5].lessons[0].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[5].lessons[1].num}</p>
                                        <p>{item.shedule[5].lessons[1].name}</p>
                                        <p>{item.shedule[5].lessons[1].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[5].lessons[2].num}</p>
                                        <p>{item.shedule[5].lessons[2].name}</p>
                                        <p>{item.shedule[5].lessons[2].teacher}</p>
                                    </div>
                                    <div className="lineShedule">
                                        <p className="numLes">{item.shedule[5].lessons[3].num}</p>
                                        <p>{item.shedule[5].lessons[3].name}</p>
                                        <p>{item.shedule[5].lessons[3].teacher}</p>
                                    </div>
                                </div>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div className="groups" id="groups">
                        <p>Перейти к расписанию группы:</p>
                        <div className="btnsGroup">
                            <button data_group="11" onClick={showShedule}>П11</button>
                            <button data_group="12" onClick={showShedule}>П12</button>
                            <button data_group="13" onClick={showShedule}>П13</button>
                            <button data_group="21" onClick={showShedule}>П21</button>
                            <button data_group="22" onClick={showShedule}>П22</button>
                            <button data_group="23" onClick={showShedule}>П23</button>
                            <button data_group="31" onClick={showShedule}>П31</button>
                            <button data_group="32" onClick={showShedule}>П32</button>
                            <button data_group="33" onClick={showShedule}>П33</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shedule;