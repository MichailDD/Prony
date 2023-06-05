import TitlePages from "../../components/TitlePages/TitlePages";
import postsState from "./PostsState";
import s from "./Posts.module.css"
import BlueBtn from "../../components/Buttons/BlueBtn/BlueBtn";
import PostsBoard from "../../components/PostsBoard/PostsBoard";
import PostsNavigation from "../../components/PostsBoard/PostsNavigation/PostsNavigation";
import PostNavigationSearch from "../../components/PostsBoard/PostsNavigation/PostNavigationSearch/PostNavigationSearch";
const Posts = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__container}>
            <div className={s.main__top}>
                <div className={s.main__title}><TitlePages title={'Posts'}/></div>
                <div className={s.main__actions}>
                <div className={s.actions}>
                <img src={postsState[0].img} alt="arrowIcon" />
                <span className={s.actions__descr}>Import</span>
                </div>
                <div className={s.actions}>
                <img className={s.img__reverse} src={postsState[0].img} alt="arrowIcon" />
                <span className={s.actions__descr}>Export</span>
                </div>
                <BlueBtn title ={postsState[1].btnTitle}/>
                </div>
            </div>
            <div className={s.posts__dashboard}>
            <div className={s.dashboard__navigation}>
                <PostsNavigation />
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Posts;