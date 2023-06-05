import s from  "./PostNavigationTags.module.css"
const PostNavigationTags = (props) => {
    return ( 
        <div className={s.blok}>
            <span className={s.text}>{props.text}</span>
            <img src={props.img} alt="" />
        </div>
     );
}
 
export default PostNavigationTags;