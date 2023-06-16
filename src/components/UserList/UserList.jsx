import s from "./UserList.module.css"
import UserListCards from "./UserListCards/UserListCards";
import UserListNav from "./UserListNav/UserListNav";
const UserList = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__header}>
                    <UserListNav/>
                </div>
                <div className={s.main__board}>
                    <UserListCards/>
                </div>
            </div>
        </div>
     );
}
 
export default UserList;