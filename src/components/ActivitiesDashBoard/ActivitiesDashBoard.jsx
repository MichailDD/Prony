import s from "./ActivitiesDashBoard.module.css"
import ActivitiesDashBoardCard from "./ActivitiesDashBoardCard/ActivitiesDashBoardCard";
import activitiesDashBoardState from "./ActivitiesDashBoardState";
const ActivitiesDashBoard = (props) => {
    return ( 
        <div className={s.blok__main} >
                <div className={s.blok}>
                <h2 className={s.title}>Activities</h2>
                <div className={s.cards}>
                    <ActivitiesDashBoardCard
                    avatar={activitiesDashBoardState[4].avatar}
                    name={activitiesDashBoardState[0].title}
                    status={activitiesDashBoardState[1].commentStatus}
                    descr={activitiesDashBoardState[2].subtitle}
                    text={activitiesDashBoardState[3].descr}
                    time={activitiesDashBoardState[5].time}
                      />
                       <ActivitiesDashBoardCard
                    avatar={activitiesDashBoardState[4].avatar2}
                    name={activitiesDashBoardState[0].title2}
                    status={activitiesDashBoardState[1].commentStatus2}
                    descr={activitiesDashBoardState[2].subtitle1}
                    text={activitiesDashBoardState[3].descr}
                    time={activitiesDashBoardState[5].time2}
                      />
                        <ActivitiesDashBoardCard
                    avatar={activitiesDashBoardState[4].avatar}
                    name={activitiesDashBoardState[0].title}
                    status={activitiesDashBoardState[1].commentStatus}
                    descr={activitiesDashBoardState[2].subtitle}
                    text={activitiesDashBoardState[3].descr}
                    time={activitiesDashBoardState[5].time}
                      />
                            <ActivitiesDashBoardCard
                    avatar={activitiesDashBoardState[4].avatar2}
                    name={activitiesDashBoardState[0].title2}
                    status={activitiesDashBoardState[1].commentStatus2}
                    descr={activitiesDashBoardState[2].subtitle1}
                    text={activitiesDashBoardState[3].descr}
                    time={activitiesDashBoardState[5].time2}
                      />
                </div>
                    <div className={s.link}>
                    <a href="#" className={s.span}>View more</a>
                    </div>
                </div>
        </div>
     );
}
 
export default ActivitiesDashBoard;