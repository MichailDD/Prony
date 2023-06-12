import TitlePages from "../../components/TitlePages/TitlePages";
import UserDatails from "../../components/UserDatails/UserDatails";
import s from "./Users.module.css"
const Users = (props) => {
    return (
         <div className={s.main}>
            <div className={s.main__wrapper}>
            <div className={s.main__title}>
            <TitlePages title="User Details"/>
            </div>
            <div className={s.main__board}>
            <UserDatails/>
            </div>
            </div>
         </div>
     );
}
 
export default Users;