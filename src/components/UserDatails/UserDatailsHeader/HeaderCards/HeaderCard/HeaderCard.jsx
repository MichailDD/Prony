import s from "./HeaderCard.module.css"
const HeaderCard = (props) => {
    return ( 
        <div className={s.card}>
            <img src={props.icon} alt="icon" />
            <span className={s.card__desc}>{props.descr}</span>
            <span className={s.card__number}>{props.number}</span>
        </div>
     );
}
 
export default HeaderCard;