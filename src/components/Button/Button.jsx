import './Button.css'

function Button({children, onClick, classBtn, type}) {
    return (
        <button type={type} className={classBtn} onClick={onClick}>{children}</button>
    )
}

export default Button