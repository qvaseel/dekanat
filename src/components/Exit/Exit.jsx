import "./Exit.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Exit = ({ isOpen, onClose }) => {
    
    if (!isOpen) {
        return null;
    }
    return (
        <div className="exit">
            <button className="exitClose" onClick={onClose}></button>
            <NavLink className="link" to="/">Выйти</NavLink>
        </div>
    );
}

export default Exit;