import PostsNavigationItem from "../../PostsBoard/PostsNavigation/PostsNavigationItem/PostsNavigationItem";
import userListNavState from "./UserListNavState";
import s from "./UserListNav.module.css"
const UserListNav = (props) => {
    const style1={width:'280px'}
    const style2={width:'200px'}
    return ( 
        <div className={s.main}>
            <PostsNavigationItem text={userListNavState[1].title1} icon={userListNavState[0].img} style={style1}/>
            <PostsNavigationItem text={userListNavState[1].title2} icon={userListNavState[0].img} style={style2}/>
            <PostsNavigationItem text={userListNavState[1].title3} icon={userListNavState[0].img} style={style2}/>
            <PostsNavigationItem text={userListNavState[1].title4} icon={userListNavState[0].img} style={style2}/>
            <PostsNavigationItem text={userListNavState[1].title5} icon={userListNavState[0].img} style={style2}/>

        </div>
     );
}
 
export default UserListNav;