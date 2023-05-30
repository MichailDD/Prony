import s from "./MenuTitle.module.css"
const MenuTitle = (props) => {
    return ( 
        <h3 className={s.menu__title}>{props.menu__title}</h3>
     );
}
 
export default MenuTitle;