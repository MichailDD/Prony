import s from "./PostNavigationSearch.module.css"
import {Link} from "react-router-dom"
const PostNavigationSearch = (props) => {
    return ( 
        <div className={s.blok}>
            <input className={s.input} type="text" placeholder="Search all posts" />
            <div className={s.image}><Link to="/votersPosts"><img className={s.img} src={props.image} alt="icon search" /></Link></div>
        </div>
     );
}
 
export default PostNavigationSearch;