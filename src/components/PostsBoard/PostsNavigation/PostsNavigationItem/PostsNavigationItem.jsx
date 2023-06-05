import s from "./PostsNavigationItem.module.css"
const PostsNavigationItem = (props) => {
    const {style}= props;

    return (
      <div className={s.blok} style={style}>
        <span>{props.text}</span>
        <img src={props.icon} alt="icon" />
      </div>
    );
}
 
export default PostsNavigationItem;