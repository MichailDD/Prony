import UserDatailsHeader from "./UserDatailsHeader/UserDatailsHeader";
import s from "./UserDatails.module.css"
import UserDatailsPosts from "./UserDatailsPosts/UserDatailsPosts";
const UserDatails = (props) => {
    return (  
        <div className={s.main}>
            <div className={s.main__board}>
                     <UserDatailsHeader/>
                     <div className={s.main__posts}>
                        <UserDatailsPosts/>
                     </div>
            </div>
        </div>
    );
}
 
export default UserDatails;