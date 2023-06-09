import s from './VotersPostsCard.module.css'

const VotersPostsCard = (props) => {
    const {style}=props
    return ( 
        <div style={style} className={s.card}>
            <div className={s.info}>
                <div className={s.avatar}>
                <img src={props.image} alt="avatar" />
                <span className={s.name}>{props.name}</span>
                </div>
                <span className={s.time}>{props.time}</span>
            </div>
            <div className={s.icon}>
                <img src={props.icon} alt="close icon" />
            </div>
        </div>
     );
}
 
export default VotersPostsCard;