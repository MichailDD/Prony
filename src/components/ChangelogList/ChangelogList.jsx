import PostsNavigationItem from "../PostsBoard/PostsNavigation/PostsNavigationItem/PostsNavigationItem";
import s from "./ChangelogList.module.css"
import changelogListState from "./ChangelogListState";
const ChangelogList = (props) => {
    const style1={width:'171px'}
    const style2={width:'200px'}


    return ( 

        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.main__input}>
                <PostsNavigationItem text={changelogListState[1].title1} style={style1} icon={changelogListState[0].img}/>
                <PostsNavigationItem text={changelogListState[1].title2} style={style2} icon={changelogListState[0].img}/>
                </div>
                <div className={s.main__label}>
                    <span className={s.label__title}>{changelogListState[1].title3}</span>
                    <img src={changelogListState[0].icon} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default ChangelogList;