import s from "./PostCardButton.module.css"
const PostCardButton = (props) => {
    const {color}=props
    return ( 
        <button className={s.btn} style={color}>{props.btn__text}</button>
     );
}
 
export default PostCardButton;