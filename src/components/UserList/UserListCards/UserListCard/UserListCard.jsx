import s from "./UserListCard.module.css"
const UserListCard = (props) => {
    const {style} =props
    return ( 
        <div style={style} className={s.card}>
            <div className={s.avatar}>
            <div className={s.avatar__image}>
            <img src={props.avatar} alt="image" />
            </div>
            <div className={s.avatar__descr}>
            <span className={s.avatar__name}>{props.name}</span>
            <span className={s.avatar__mail}>{props.mail}</span>
            <span className={s.avatar__time}>{props.time}</span>
            </div>
            </div>
            <div className={s.info}>
                <div className={s.info__actions}>
                    <div className={s.actions}>
                        <img src={props.icon1} alt="icon" />
                        <span className={s.number}>{props.number1}</span>
                    </div>
                    <div className={s.actions}>
                        <img src={props.icon2} alt="icon" />
                        <span className={s.number}>{props.number2}</span>
                    </div>
                    <div className={s.actions}>
                        <img src={props.icon3} alt="icon" />
                        <span className={s.number}>{props.number3}</span>
                    </div>

                </div>
                <span className={s.number}>{props.status}</span>
            </div>
            <img className={s.dots} src={props.dots} alt="dots" />
        </div>
     );
}
 
export default UserListCard;