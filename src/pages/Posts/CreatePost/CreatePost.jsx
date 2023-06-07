import CreatePostModal from "../../../components/CreatePostModal/CreatePostModal";
import InputPhoto from "../../../components/InputPhoto/InputPhoto";
import TitlePages from "../../../components/TitlePages/TitlePages";
import s from "./CreatePost.module.css"
const CreatePost = (props) => {
    return ( 
        <div className={s.main}>
            <div className={s.main__wrapper}>
            <TitlePages title="Create post"/>
            <div className={s.create}> 
               <CreatePostModal/>     
            </div>
            </div>
        </div>
     );
}
 
export default CreatePost;