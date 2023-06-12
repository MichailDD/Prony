import UserDatailsPost from "./UserDatailsPost/UserDatailsPost";
import s from "./UserDatailsPosts.module.css"
import userDatailsPostsState from "./UserDatailsPostsState";
const UserDatailsPosts = (props) => {
    const style = {
        backgroundColor:'#F8F8F8'
    }
    return ( 
        <div className={s.main}>
            <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr1}
            time={userDatailsPostsState[2].time}
            style={style}/>
               <UserDatailsPost number={userDatailsPostsState[0].number2}
            descr={userDatailsPostsState[1].descr2}
            time={userDatailsPostsState[2].time}
            />
              <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr3}
            time={userDatailsPostsState[2].time}
            style={style}/>
                 <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr4}
            time={userDatailsPostsState[2].time}
            />
              <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr1}
            time={userDatailsPostsState[2].time}
            style={style}/>
                   <UserDatailsPost number={userDatailsPostsState[0].number2}
            descr={userDatailsPostsState[1].descr2}
            time={userDatailsPostsState[2].time}
            />
             <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr3}
            time={userDatailsPostsState[2].time}
            style={style}/>
            <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr4}
            time={userDatailsPostsState[2].time}
            />
             <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr3}
            time={userDatailsPostsState[2].time}
            style={style}/>
              <UserDatailsPost number={userDatailsPostsState[0].number1}
            descr={userDatailsPostsState[1].descr4}
            time={userDatailsPostsState[2].time}
            />
        </div>
     );
}
 
export default UserDatailsPosts;