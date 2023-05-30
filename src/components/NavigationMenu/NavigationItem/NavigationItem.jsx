import s from "./NavigationItem.module.css"
import {Link} from 'react-router-dom'
const NavigationItem = (props) => {
    return ( 
        <div className={s.blok}>
              <img className={s.icon__dis} src={props.icon_dis} alt="icon" />
            <img className={s.icon} src={props.icon} alt="" />
            <Link className={s.link} to={props.link}>{props.title}</Link>
        </div>
     );
}
 
export default NavigationItem;