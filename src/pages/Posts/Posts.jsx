import TitlePages from "../../components/TitlePages/TitlePages";
import postsState from "./PostsState";
import s from "./Posts.module.css"
import {Link} from 'react-router-dom'
import BlueBtn from "../../components/Buttons/BlueBtn/BlueBtn";
import PostsBoard from "../../components/PostsBoard/PostsBoard";
import PostsNavigation from "../../components/PostsBoard/PostsNavigation/PostsNavigation";
import PostNavigationSearch from "../../components/PostsBoard/PostsNavigation/PostNavigationSearch/PostNavigationSearch";
import PostCards from "../../components/PostsBoard/PostCards/PostCards";
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
                <Link to='/createPosts'>  <BlueBtn  title ={postsState[1].btnTitle}/></Link>
                </div>
            </div>
            <div className={s.posts__dashboard}>
            <div className={s.dashboard__navigation}>
                <PostsNavigation />
            </div>
            <div className={s.dashboard__posts}>
            <PostCards/>
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Posts;