import EyeIcon from "../BoardIcon/EyeIcon/EyeIcon";
import LockIcon from "../BoardIcon/LockIcon/LockIcon";
import s from "./BoardsCardTask.module.css"
const BoardCardTask = (props) => {
    return ( 
        <div className={s.card}>
            <div className={s.descr}>
                <img className={s.img__icon} src={props.icon} alt="icon" />
                <span className={s.span}>{props.info}</span>
            </div>
            <div className={s.number}>
                <span className={s.number__info}>{props.number}</span>
            </div>
            <div className={s.icons}>
                <EyeIcon/>
                <LockIcon/>
                <img className={s.img__icon} src={props.icon2} alt="icon" />
            </div>
        </div>
     );
}
 
export default BoardCardTask;