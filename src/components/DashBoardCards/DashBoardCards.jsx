import DashBoardCard from "./DashBoardCard/DashBoardCard";
import dashBoardCardsState from "./DashBoardCardsState";
import s from "./DashBoardCards.module.css"

const DashBoardCards = (props) => {
    return ( 
        <div className={s.blok__cards}>
            <DashBoardCard title__card={dashBoardCardsState[0].title} number={dashBoardCardsState[1].number}/>
            <DashBoardCard title__card={dashBoardCardsState[0].title2} number={dashBoardCardsState[1].number2}/>
            <DashBoardCard title__card={dashBoardCardsState[0].title3} number={dashBoardCardsState[1].number2}/>
            <DashBoardCard title__card={dashBoardCardsState[0].title4} number={dashBoardCardsState[1].number2}/>
        </div>
     );
}
 
export default DashBoardCards;