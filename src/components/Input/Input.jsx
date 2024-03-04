import "./Input.css"

const Input = ({ name, type, placeholder, value, onChange, classInp }) => {
    return (
        <input className={classInp} onChange={onChange} value={value} type={type} placeholder={placeholder} name={name} />
    );
}

export default Input;