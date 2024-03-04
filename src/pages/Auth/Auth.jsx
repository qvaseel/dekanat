import "./Auth.css"
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const Auth = () => {
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({mode: "onChange"})

    const [path, setPath] = useState('/');
    const [isTrue, setIsTrue] = useState(true);

    const onSubmit = (data) => {
        if (data.name == "dekanat" && data.password == "12345") {
            history.push('/home')
        } else {
            setIsTrue(false)
            console.log(isTrue)
        }
    }

    return (
        <div className="form-wrapper">
            <form className="form-auth" >
                <h2 className="authHead2">ИС Деканат</h2>
                <h1 className="authHead1">Авторизация</h1>
                <input type="text" className={errors.name ? "errors" : "inpAuth"} {...register("name", { required: true})} placeholder="Логин" />
                <input type="password" className={errors.name ? "errors" : "inpAuth"} {...register("password", { required: true})} placeholder="Пароль"/>
                <Link onClick={handleSubmit(onSubmit)} to={path}><Button classBtn="btnAuth" >Войти</Button></Link>
                {isTrue ? <p>Введите данные.</p> : <p>Логин или пароль неверны.</p>}
            </form>
        </div>
    );
}

export default Auth;