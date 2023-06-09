import TogleSwitch from "./TogleSwitch/TogleSwitch";
import s from "./DashBoardTogle.module.css"
const DashBoardTogle = (props) => {
    return (  
        <div className={s.main}>
        <div className={s.main__left}>
            <TogleSwitch/>
        </div>
        <div className={s.main__right}>
        <span className={s.title}>{props.title}</span>
        <span className={s.descr}>{props.descr}</span>
        </div>
    </div>
    );
}
 
export default DashBoardTogle;