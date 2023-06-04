
import boasrdState from "./BoardsState";
import s from "./Board.module.css"
import TitlePages from "../../components/TitlePages/TitlePages";
import BlueBtn from "../../components/Buttons/BlueBtn/BlueBtn";
import BoardCards from "../../components/BoardsCardTask/BoardCards/BoardCards";
import DashboardBoard from "../../components/DashboardBoard/DashBoardBoard/DashboardBoard";
const Boards = (props) => {
    return ( 
        <div className={s.main}>
        {/* <div className={s.wrapper}>
            <div className={s.main__top}>
                <TitlePages title={boasrdState[0].title}/>
                <BlueBtn title={boasrdState[0].textBtn}/>
            </div>
            <div className={s.info}>
                <span className={s.info__name}>{boasrdState[0].name}</span>
                <span className={s.info__name}>{boasrdState[0].posts}</span>

            </div>
            <div className={s.boards__task}>
                <BoardCards/>
            </div>
        </div> */}
            <DashboardBoard/>
        </div>      
     );
}
 
export default Boards;