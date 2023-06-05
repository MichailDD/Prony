import s from "./PostNavigationSearch.module.css"
const PostNavigationSearch = (props) => {
    return ( 
        <div className={s.blok}>
            <input className={s.input} type="text" placeholder="Search all posts" />
            <div className={s.image}><img className={s.img} src={props.image} alt="icon search" /></div>
        </div>
     );
}
 
export default PostNavigationSearch;