
import boasrdState from "./BoardsState";
import s from "./Board.module.css"
import TitlePages from "../../components/TitlePages/TitlePages";
import BlueBtn from "../../components/Buttons/BlueBtn/BlueBtn";
const Boards = (props) => {
    return ( 
        <div className={s.main}>
        <div className={s.wrapper}>
            <div className={s.main__top}>
                <TitlePages title={boasrdState[0].title}/>
                <BlueBtn title={boasrdState[0].textBtn}/>
            </div>
            <div className={s.info}>
                <span className={s.info__name}>{boasrdState[0].name}</span>
                <span className={s.info__name}>{boasrdState[0].posts}</span>

            </div>
        </div>
            
        </div>
     );
}
 
export default Boards;