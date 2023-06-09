import s from "./TagsBoard.module.css"
import TaskAdder from "./TagsCard/TagsCard";
const TagsBoard = (props) => {
    return ( 
        <div className={s.main}>
            <TaskAdder/>
        </div>
     );
}
 
export default TagsBoard   ;