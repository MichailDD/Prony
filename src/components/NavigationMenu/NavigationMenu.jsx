import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemAccordeon from "./NavigationItem/NavigationMenuAccordeon/NavigationItemAccordeon";
import s from "./NavigationMenu.module.css"
import navigationMenuState from "./NavigationMenuState";

const NavigationMenu = (props) => {
    return ( 
        <div className={s.blok__menu}>
            <NavigationItem icon={navigationMenuState[0].dashboard } icon_dis={navigationMenuState[0].dashboardDis} link='/' title={navigationMenuState[1].dashboard}/>
            <NavigationItem icon={navigationMenuState[0].boardsDis} icon_dis={navigationMenuState[0].boards} link='/boards' title={navigationMenuState[1].boards}/>
            <NavigationItem icon={navigationMenuState[0].postsDis}icon_dis={navigationMenuState[0].posts}  link='/posts' title={navigationMenuState[1].posts}/>
            <NavigationItem icon={navigationMenuState[0].statuses} icon_dis={navigationMenuState[0].statuses}link='/statuses' title={navigationMenuState[1].statuses}/>
            <NavigationItem icon={navigationMenuState[0].users}icon_dis={navigationMenuState[0].users} link='/users' title={navigationMenuState[1].users}/>
            <NavigationItem icon={navigationMenuState[0].changelog} icon_dis={navigationMenuState[0].changelog}link='/changelog' title={navigationMenuState[1].changelog}/>
            <div className={s.accordeon__item}><NavigationItemAccordeon icon={navigationMenuState[0].settings} arrow={navigationMenuState[0].arrow}/></div>
            <NavigationItem icon={navigationMenuState[0].integrations}icon_dis={navigationMenuState[0].integrations} link='/integrations' title={navigationMenuState[1].integrations}/>

        </div>
     );
}
 
export default NavigationMenu;