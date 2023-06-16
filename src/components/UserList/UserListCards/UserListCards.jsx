import UserListCard from "./UserListCard/UserListCard";
import userListCardsState from "./UserListCardsState";
import { Link } from "react-router-dom";
import s from "./UserListCards.module.css"
const UserListCards = (props) => {
    const style ={backgroundColor:'#F8F8F8'}
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
            <Link to="/detailUser" className={s.link}>
            <UserListCard 
                avatar={userListCardsState[0].avatar1}
                name={userListCardsState[1].name1}
                mail={userListCardsState[2].mail}
                time={userListCardsState[3].time}
                icon1={userListCardsState[6].icon1}
                icon2={userListCardsState[6].icon2}
                icon3={userListCardsState[6].icon3}
                status={userListCardsState[5].status1}
                number1={userListCardsState[4].number1}
                number2={userListCardsState[4].number2}
                number3={userListCardsState[4].number3}
                dots={userListCardsState[6].icon4}
                style={style}
                /></Link>
                     <UserListCard 
                avatar={userListCardsState[0].avatar2}
                name={userListCardsState[1].name2}
                mail={userListCardsState[2].mail}
                time={userListCardsState[3].time}
                icon1={userListCardsState[6].icon1}
                icon2={userListCardsState[6].icon2}
                icon3={userListCardsState[6].icon3}
                status={userListCardsState[5].status1}
                number1={userListCardsState[4].number1}
                number2={userListCardsState[4].number2}
                number3={userListCardsState[4].number3}
                dots={userListCardsState[6].icon4}
                />
                     <UserListCard 
                avatar={userListCardsState[0].avatar5}
                name={userListCardsState[1].name3}
                mail={userListCardsState[2].mail}
                time={userListCardsState[3].time}
                icon1={userListCardsState[6].icon1}
                icon2={userListCardsState[6].icon2}
                icon3={userListCardsState[6].icon3}
                status={userListCardsState[5].status2}
                number1={userListCardsState[4].number1}
                number2={userListCardsState[4].number2}
                number3={userListCardsState[4].number3}
                dots={userListCardsState[6].icon4}
                style={style}
                />
                        <UserListCard 
                avatar={userListCardsState[0].avatar3}
                name={userListCardsState[1].name4}
                mail={userListCardsState[2].mail}
                time={userListCardsState[3].time}
                icon1={userListCardsState[6].icon1}
                icon2={userListCardsState[6].icon2}
                icon3={userListCardsState[6].icon3}
                status={userListCardsState[5].status1}
                number1={userListCardsState[4].number1}
                number2={userListCardsState[4].number2}
                number3={userListCardsState[4].number3}
                dots={userListCardsState[6].icon4}
                />
                         <UserListCard 
                avatar={userListCardsState[0].avatar4}
                name={userListCardsState[1].name5}
                mail={userListCardsState[2].mail}
                time={userListCardsState[3].time}
                icon1={userListCardsState[6].icon1}
                icon2={userListCardsState[6].icon2}
                icon3={userListCardsState[6].icon3}
                status={userListCardsState[5].status2}
                number1={userListCardsState[4].number1}
                number2={userListCardsState[4].number2}
                number3={userListCardsState[4].number3}
                dots={userListCardsState[6].icon4}
                style={style}
                />
                           <UserListCard 
                avatar={userListCardsState[0].avatar6}
                name={userListCardsState[1].name6}
                mail={userListCardsState[2].mail}
                time={userListCardsState[3].time}
                icon1={userListCardsState[6].icon1}
                icon2={userListCardsState[6].icon2}
                icon3={userListCardsState[6].icon3}
                status={userListCardsState[5].status1}
                number1={userListCardsState[4].number1}
                number2={userListCardsState[4].number2}
                number3={userListCardsState[4].number3}
                dots={userListCardsState[6].icon4}
                />

            </div>
        </div>
     );
}
 
export default UserListCards;