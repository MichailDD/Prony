import TitlePages from "../../../components/TitlePages/TitlePages";
import UserList from "../../../components/UserList/UserList";
import s from "./Users.module.css"
const Users = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__title}>
                <TitlePages title="Users"/>
                </div>
                <div className={s.main__board}>
                    <UserList/>
                </div>
            </div>
        </div>
     );
}
 
export default Users;