import s from "./BlueBtn.module.css"
const BlueBtn = (props) => {
    return ( 
        <button className={s.btn}>{props.title}</button>
     );
}
 
export default BlueBtn;