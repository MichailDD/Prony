import HeaderCard from "./HeaderCard/HeaderCard";
import headerCardsState from "./HeaderCardsState";
import s from "./HeaderCards.module.css"
const HeaderCards = (props) => {
    return ( 
        <div className={s.main}>
            <HeaderCard icon={headerCardsState[0].icon1}
            descr={headerCardsState[1].descr1}
            number={headerCardsState[2].num1} />
             <HeaderCard icon={headerCardsState[0].icon2}
            descr={headerCardsState[1].descr2}
            number={headerCardsState[2].num2} />
             <HeaderCard icon={headerCardsState[0].icon3}
            descr={headerCardsState[1].descr3}
            number={headerCardsState[2].num2} />
        </div>
     );
}
 
export default HeaderCards;