import s from  "./TitlePages.module.css"
const TitlePages = (props) => {
    return ( 
        <h1 className={s.title}>
            {props.title}
        </h1>
     );
}
 
export default TitlePages;