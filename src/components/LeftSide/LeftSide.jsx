import "./LeftSide.css"
import { NavLink } from "react-router-dom";
import pdf from "./uchebniyplan.pdf"

const LeftSide = () => {
    return (
        <div className="leftPanel" id="leftSide">
            <ul>
                <li><p className="status">Статус: деканат</p></li>
                <li><NavLink style={{ textDecoration: 'none', color: 'black' }} activeClassName='active' to={'/home'}>Главная</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none', color: 'black' }} activeClassName='active' to={'/teachers'}>Преподаватели</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none', color: 'black' }} activeClassName='active' to={'/students'}>Студенты</NavLink></li>
                <li><NavLink style={{ textDecoration: 'none', color: 'black' }} activeClassName='active' to={'/shedule'}>Расписание</NavLink></li>
                <li><a style={{ textDecoration: 'none', color: 'black' }} href={pdf} download="Учебный план">Учебный план</a></li>
            </ul>
        </div>
    );
}

export default LeftSide;