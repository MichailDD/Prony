import UserDatailsHeader from "./UserDatailsHeader/UserDatailsHeader";
import s from "./UserDatails.module.css"
const UserDatails = (props) => {
    return (  
        <div className={s.main}>
            <div className={s.main__board}>
                     <UserDatailsHeader/>

            </div>
        </div>
    );
}
 
export default UserDatails;