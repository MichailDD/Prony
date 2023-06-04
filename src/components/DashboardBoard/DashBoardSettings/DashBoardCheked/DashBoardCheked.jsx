import s from "./DashBoardCheked.module.css"
const DashBoardCheked = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__left}>
                <input className={s.input} type='checkbox' name={props.name}   id="status" />
            </div>
            <div className={s.main__right}>
            <span className={s.title}>{props.title}</span>
            <span className={s.descr}>{props.descr}</span>
            </div>
        </div>
     );
}
 
export default DashBoardCheked;