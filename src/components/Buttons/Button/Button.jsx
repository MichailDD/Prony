import s from "./Button.module.css"
const Button = (props) => {
    return ( 
        <button className={s.btn}>{props.title}</button>
     );
}
 
export default Button;