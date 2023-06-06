import s from "./CreatePostModal.module.css"
import createPostModalState from "./CreatePostModalState";
const CreatePostModal = (props) => {
    return ( 
        <div className={s.blok}>
            <div className={s.blok__top}>
                <span className={s.blok__title}>{createPostModalState[0].inputTitle}</span>
            </div>
        </div>
     );
}
 
export default CreatePostModal;