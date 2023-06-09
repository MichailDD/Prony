import { Outlet ,Link} from "react-router-dom";
import Header from "../Header/Header";
import s from "./Layoute.module.css"
import NavigationMenu from "../NavigationMenu/NavigationMenu";


const Layoute = (props) => {
    return ( 
        <>
        <Header/>
        <div className={s.layoute}>
            
            <NavigationMenu/>
            <Outlet/>
        </div>
        </>
     );
}
 
export default Layoute;