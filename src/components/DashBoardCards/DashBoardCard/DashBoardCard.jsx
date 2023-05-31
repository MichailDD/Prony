import s from "./DashBoardCard.module.css"
const DashBoardCard = (props) => {
    return (
        <div className={s.card}>
                <div className={s.top}>
                    <h3 className={s.title__card}>{props.title__card}</h3>
                </div>
                <div className={s.bottom}>
                    <span className={s.number}>{props.number}</span>
                </div>
        </div>
      );
}
 
export default DashBoardCard;