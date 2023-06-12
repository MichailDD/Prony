import s from "./UserDatailsPost.module.css"
const UserDatailsPost = (props) => {
    const {style} = props
    return ( 
        <div style={style} className={s.card}>
            <div className={s.card__info}>
                    <span className={s.card__number}>{props.number}</span>
                    <span className={s.card__descr}>{props.descr}</span>
            </div>
            <span className={s.card__time}>{props.time}</span>
        </div>
     );
}
 
export default UserDatailsPost;