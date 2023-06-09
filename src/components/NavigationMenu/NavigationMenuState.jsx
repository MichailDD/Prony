import dashboard from "/src/assets/image/icon_menu1.svg"
import dashboardDis from  "/src/assets/image/icon_menu1_dis.svg"
import boards from  '/src/assets/image/icon_menu2.svg'
import  posts from  "/src/assets/image/icon_menu3.svg"
import  statuses from "/src/assets/image/icon_menu4.svg"
import users from "/src/assets/image/icon_menu5.svg"
import changelog from  "/src/assets/image/icon_menu6.svg"
import settings from  '/src/assets/image/icon_menu7.svg'
import integrations from "/src/assets/image/icon_menu8.svg"
import boardsDis from  "/src/assets/image/icon_menu2_dis.svg"
import postsDis from    "/src/assets/image/icon_menu3_dis.svg"
import arrow from   "/src/assets/image/arrowMenu.svg"
const navigationMenuState =[
    {
        dashboard:  dashboard,
        dashboardDis:dashboardDis,
        boards:boards,
        posts:posts,
        statuses:statuses,
        users:users,
        changelog:changelog,
        settings:settings,
        integrations:integrations,
        boardsDis:boardsDis,
        postsDis:postsDis,
        arrow:arrow

    },
    {
        dashboard:"Dashboard",
        boards:"Boards",
        posts:'Posts',
        statuses:'Statuses',
        users:'Users',
        changelog:'Changelog',
        settings:'Settings',
        integrations:'Integrations'
    }
]
export default navigationMenuState