import TitlePages from '../../TitlePages/TitlePages';
import HeaderCards from './HeaderCards/HeaderCards';
import s from './UserDatailsHeader.module.css'
import userDatailsHeaderState from './UserDatailsHeaderState';
const UserDatailsHeader = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__left}>
            <div className={s.avatar}>
            <img className={s.avatar__img} src={userDatailsHeaderState[0].avatar} alt="avatar" />
            <span className={s.avatar__name}>Admin</span>
            </div>
            <div className={s.avatar__desr}>
                <TitlePages title ={userDatailsHeaderState[1].title1}/>
                <span className={s.avatar__mail}>{userDatailsHeaderState[2].mail}</span>
                <span className={s.time}>{userDatailsHeaderState[3].time}</span>
            </div>
            </div>
            <div className={s.main__right}>
                <HeaderCards/>
            </div>

        </div>
     );
}
 
export default UserDatailsHeader;