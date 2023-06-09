import tagsState from "./TagsState";
import s from "./Tags.module.css"
import TagsCard from "./TagsBoard/TagsCard/TagsCard";
const Tags = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
               <TagsCard/>
            </div>
        </div>
     );
}
 
export default Tags;