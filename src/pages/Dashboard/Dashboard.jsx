import TitlePages from "../../components/TitlePages/TitlePages";
import dashBoardState from "./DashboardState";
import s from "./Dashboard.module.css"
// import DashBoardCards from "../../components/DashBoardCards/DashBoardCards";
import Statistic from "../../components/Schedule/Statistic/Statistic";
import Schedule from "../../components/Schedule/Schedule";
import ActivitiesDashBoard from "../../components/ActivitiesDashBoard/ActivitiesDashBoard";

const DashBoard = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.title}>
            <TitlePages title={dashBoardState[0].title} />
            </div>
            <div className={s.main__blok}>
            <div className={s.left}>
                    <div className={s.top}>
                    {/* <DashBoardCards/> */}
                    </div>
                    <div className={s.bottom}>
                        <div className={s.statistic}>
                        <div className={s.statistic__top}>
                        <Statistic/>
                        </div>
                        <div className={s.statistic__bottom}>
                           <Schedule/>
                        </div>
                        </div>
                    </div>
            </div>
           
            <div className={s.right}>
                <ActivitiesDashBoard/>
                 </div>
            </div>
         </div>
     );
}
 
export default DashBoard;