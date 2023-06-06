import s from "./PostCard.module.css"
import PostCardButton from "./PostCardButton/PostCardButton";
const PostCard = (props) => {
    const colorRed={backgroundColor:'#EB5757'}
    const colorGreen ={backgroundColor:'#27AE60'}
    const { style } = props;

    return ( 
        <div style={style} className={s.card}>
            <div className={s.card__avatar}>
                <img src={props.img} alt="avatar" />
                <span className={`${s.info__title} ${s.avatar__name}`}>{props.name}</span>
            </div>
            <div className={s.card__info}>
                <div className={s.info__top}>
                    <span className={s.info__title}>{props.title}</span>
                    <span  className={s.info__time}>{props.time}</span>
                </div>
                <div className={s.info__text}>
                <p className={s.info__descr}>{props.descr}</p>
                </div>
                <div className={s.info__buttons}>
                    <PostCardButton color={colorRed} btn__text={"Tagname1"}/>
                    <PostCardButton color={colorGreen} btn__text={"Tagname2"}/>
                </div>
            </div>
            <div className={s.card__actions}>
                <div className={s.actions__status}>
                <img src={props.icon__like} alt="icon" />
                <span className={s.actions__number} >{props.numberLike}</span>
                </div>
                <div className={s.actions__status}>
                <img src={props.icon__message} alt="icon" />
                <span className={s.actions__number} >{props.numberMessege}</span>
                </div>
                <img className={s.actions__dots} src={props.dotsIcon} alt="icon" />
            </div>
        </div>
     );
}
 
export default PostCard;