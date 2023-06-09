import PostNavigationSearch from "./PostNavigationSearch/PostNavigationSearch";
import s from "./PostsNavigation.module.css"
import postNavigationState from "./PostsNavigationState";
import PostsNavigationItem from "./PostsNavigationItem/PostsNavigationItem";
import PostNavigationTags from "./PostNavigationTags/PostNavigationTags";
const PostsNavigation = (props) => {
    const style1={width:'178px'}
    const style2={width:'221px'}
    const style3={width:'324px'}
    const style4={width:'164px'}
    const style5={width:'280px'}
    const style6={width:'200px'}
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
                <div className={s.wrapper__input}>
                <PostNavigationSearch  image={postNavigationState[0].img}/> 
                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title2} style={style1}  />
                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title3} style={style2}  />
                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title4} style={style2}  />
                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title5} style={style3}  />
                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title6} style={style3}  />

                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title7} style={style4}  />
                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title8} style={style5}  />
                <PostsNavigationItem icon={postNavigationState[0].img2} text={postNavigationState[1].title9} style={style6}  />
                </div>
                <div className={s.wrapper__tags}>
                <PostNavigationTags text={postNavigationState[2].tags1} img={postNavigationState[0].img3}/>
                <PostNavigationTags text={postNavigationState[2].tags2} img={postNavigationState[0].img3}/>
                </div>
                <div className={s.wrapper__sort}>
                    <span className={s.sort__title}>Sort by:</span>
                    <div className={s.sort__blok}>
                    <span className={s.sort__text}>Newest</span>
                    <img src={postNavigationState[0].img2} alt="icon" />
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default PostsNavigation;