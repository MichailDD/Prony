import s from './ActivitiesDashBoardCard.module.css'
const ActivitiesDashBoardCard = (props) => {
    return ( 
        <div className={s.card__main}>
       <div  className={s.card}>
       <div className={s.image}>
                <img className={s.img} src={props.avatar} alt="avatar image" />
            </div>
            <div className={s.info}>
                <p className={s.name}>{props.name}</p>
                <p  className={s.status}>{props.status}</p>
                <p  className={s.descr}>{props.descr}</p>
                <p className={s.text}>{props.text}</p>
            </div>
            <div className={s.time}>
            <span>{props.time}</span>
            </div>
       </div>
        </div>
     );
}
 
export default ActivitiesDashBoardCard;